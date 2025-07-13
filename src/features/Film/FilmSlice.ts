import { createSlice } from "@reduxjs/toolkit";
import type { TFilm } from "../../types/views/RegistrationPage";
import {
  getFilmByIdThunk,
  getFilmsBySearchThunk,
  getFilmsThunk,
  getShowCaseFilmsThunk,
  getSearchFilmsThunk,
} from "./thunk";
import { moveToFilmViewType } from "../../shared/lib/utilsFunction/moveToFilmViewType";

export interface FilmState {
  films: TFilm[];
  showCaseFilms: TFilm[];
  searchedFilms: TFilm[];
  currentFilm: TFilm | null;
  error: boolean;
  loading: boolean;
  hasMore: boolean;
  hasMoreSearched: boolean;
}

const initialState: FilmState = {
  films: [],
  showCaseFilms: [],
  searchedFilms: [],
  currentFilm: null,
  error: false,
  loading: false,
  hasMore: true,
  hasMoreSearched: true,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    clearFilms: (state) => {
      state.hasMore = true;
      state.films = [];
    },
    clearCurrentFilm: (state) => {
      state.currentFilm = null;
    },
    clearSearchingFilms: (state) => {
      state.searchedFilms = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmByIdThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getFilmByIdThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getFilmByIdThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.currentFilm = moveToFilmViewType(action.payload);
    });
    builder.addCase(getFilmsBySearchThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getFilmsBySearchThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getFilmsBySearchThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi) => {
        state.films.push(moveToFilmViewType(filmApi));
      });
      if (action.payload.length < 50 || state.films.length > 300) {
        state.hasMore = false;
      }
    });
    builder.addCase(getFilmsThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getFilmsThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getFilmsThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi) => {
        state.films.push(moveToFilmViewType(filmApi));
      });
      if (action.payload.length < 50 || state.films.length > 300) {
        state.hasMore = false;
      }
    });
    builder.addCase(getShowCaseFilmsThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getShowCaseFilmsThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getShowCaseFilmsThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi) => {
        state.showCaseFilms.push(moveToFilmViewType(filmApi));
      });
    });
    builder.addCase(getSearchFilmsThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getSearchFilmsThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getSearchFilmsThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi) => {
        state.searchedFilms.push(moveToFilmViewType(filmApi));
      });
      if (action.payload.length < 50 || state.searchedFilms.length > 300) {
        state.hasMoreSearched = false;
      }
    });
  },
  selectors: {
    getCurrentFilm: (state) => {
      return state.currentFilm;
    },
    getFilms: (state) => {
      return state.films;
    },
    getShowcaseFilms: (state) => {
      return state.showCaseFilms;
    },
    getSearchFilms: (state) => {
      return state.searchedFilms;
    },
    getHasMore: (state) => {
      return state.hasMore;
    },
    getHasMoreSearched: (state) => {
      return state.hasMoreSearched;
    },
  },
});

export const {
  setCurrentFilm,
  clearFilms,
  clearCurrentFilm,
  clearSearchingFilms,
} = filmSlice.actions;
export const {
  getCurrentFilm,
  getFilms,
  getShowcaseFilms,
  getHasMore,
  getHasMoreSearched,
  getSearchFilms,
} = filmSlice.selectors;

export const filmReducer = filmSlice.reducer;
