import { createSlice } from "@reduxjs/toolkit";
import type { TFilm } from "../../types/views/RegistrationPage";
import type { TFilmApi } from "../../types/api/Film";
import { getFilmByIdThunk, getFilmsBySearchThunk, getFilmsThunk } from "./thunk";
import { moveToFilmViewType } from "../../shared/lib/utilsFunction/moveToFilmViewType";


export interface FilmState {
  films: TFilm[];
  currentFilm: TFilm | null;
  error: boolean;
  loading: boolean;
}

const initialState: FilmState = {
  films: [],
  currentFilm: null,
  error: false,
  loading: false,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
    },
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    clearFilms: (state) => {
      state.films = [];
    },
    clearCurrentFilm: (state) => {
      state.currentFilm = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmByIdThunk.rejected, (state, action)=>{
      state.error = true;
      state.loading = false;
    })
    builder.addCase(getFilmByIdThunk.pending, (state, action)=>{
      state.error = false;
      state.loading = true;
    })
    builder.addCase(getFilmByIdThunk.fulfilled, (state, action)=>{
      state.error = false;
      state.loading = false;
      state.currentFilm = moveToFilmViewType(action.payload);
    })
    builder.addCase(getFilmsBySearchThunk.rejected, (state, action)=>{
      state.error = true;
      state.loading = false;
    })
    builder.addCase(getFilmsBySearchThunk.pending, (state, action)=>{
      state.error = false;
      state.loading = true;
    })
    builder.addCase(getFilmsBySearchThunk.fulfilled, (state, action)=>{
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi)=>{
        state.films.push(moveToFilmViewType(filmApi));
      });
    })
    builder.addCase(getFilmsThunk.rejected, (state, action)=>{
      state.error = true;
      state.loading = false;
    })
    builder.addCase(getFilmsThunk.pending, (state, action)=>{
      state.error = false;
      state.loading = true;
    })
    builder.addCase(getFilmsThunk.fulfilled, (state, action)=>{
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi)=>{
        state.films.push(moveToFilmViewType(filmApi));
      });
    })
  },
  selectors: {
    getCurrentFilm: (state)=>state.currentFilm,
    getFilms: (state) => state.films,
  }
});

export const { setFilms, setCurrentFilm } = filmSlice.actions;

export default filmSlice.reducer;