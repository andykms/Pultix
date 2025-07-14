import type { TFilm } from '../../types/views/RegistrationPage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  getFavoritesIdsThunk,
  postFavoriteIdThunk,
  deleteFavouriteIdThunk,
  getFavouriteFilmByIdThunk,
  getFavouritesFilmsThunk,
} from './thunk';
import { moveToFilmViewType } from '../../shared/lib/utilsFunction/moveToFilmViewType';

export interface FavoritesState {
  favoritesIds: string[];
  favorites: TFilm[];
  error: boolean;
  loading: boolean;
  hasMore: boolean;
  allFavoritesCount: number;
}

const initialState: FavoritesState = {
  favorites: [],
  favoritesIds: [],
  error: false,
  loading: false,
  hasMore: true,
  allFavoritesCount: 0,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesIdsThunk.fulfilled, (state, action) => {
      state.favoritesIds = action.payload.id ? action.payload.id : [];
      state.error = false;
      state.loading = false;
      state.allFavoritesCount = action.payload.id ? action.payload.id.length : 0;
    });
    builder.addCase(deleteFavouriteIdThunk.fulfilled, (state, action) => {
      const deletedId = action.payload.id;
      if (deletedId) {
        state.favoritesIds = state.favoritesIds.filter((item) => item !== deletedId);
        state.favorites = state.favorites.filter((item) => item._id !== deletedId);
      }
      state.allFavoritesCount -= 1;
    });
    builder.addCase(
      postFavoriteIdThunk.fulfilled,
      (state, action: PayloadAction<{ id: string }>) => {
        const id = action.payload.id;
        state.favoritesIds.push(id);
        state.error = false;
        state.loading = false;
        state.allFavoritesCount += 1;

        state.hasMore = true;
      },
    );
    builder.addCase(getFavouriteFilmByIdThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getFavouriteFilmByIdThunk.pending, (state, action) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(getFavouritesFilmsThunk.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi) => {
        if (filmApi.id) state.favorites.push(moveToFilmViewType(filmApi));
      });
      if (state.favorites.length >= state.allFavoritesCount || action.payload.length <= 0) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
      }
    });
  },
  selectors: {
    getFavouritesFilms: (state) => {
      return state.favorites;
    },
    getFavouritesIds: (state) => {
      return state.favoritesIds;
    },
    getShowcaseFavourites: (state) => {
      return state.favorites.slice(0, 5);
    },
    getHasMore: (state) => {
      return state.hasMore;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const { getFavouritesFilms, getFavouritesIds, getShowcaseFavourites, getHasMore } =
  favoritesSlice.selectors;

export const favoritesReducer = favoritesSlice.reducer;
