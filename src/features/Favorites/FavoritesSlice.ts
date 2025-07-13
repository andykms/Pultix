import type { TFilm} from "../../types/views/RegistrationPage";
import { createSlice } from "@reduxjs/toolkit";
import { getFavoritesIdsThunk, postFavoriteIdThunk, deleteFavouriteIdThunk, getFavouriteFilmByIdThunk, getFavouritesFilmsThunk } from "./thunk";
import { moveToFilmViewType } from "../../shared/lib/utilsFunction/moveToFilmViewType";

export interface FavoritesState {
  favoritesIds: string[];
  favorites: TFilm[];
  error: boolean,
  loading: boolean,
}

const initialState: FavoritesState = {
  favorites: [],
  favoritesIds: [],
  error: false,
  loading: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite._id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(getFavoritesIdsThunk.fulfilled, (state, action)=>{
      state.favoritesIds = action.payload.id ? action.payload.id : [];
      state.error = false;
      state.loading = false;
    })
    builder.addCase(deleteFavouriteIdThunk.fulfilled, (state, action)=>{
      const deletedId = action.payload.id;
      if(deletedId) {
        state.favoritesIds = state.favoritesIds.filter((item)=> item !== deletedId);
        state.favorites = state.favorites.filter((item)=> item._id !== deletedId);
      }
    })
    builder.addCase(postFavoriteIdThunk.fulfilled, (state, action)=>{
      state.error = false;
      state.loading = false;
    })
    builder.addCase(getFavouriteFilmByIdThunk.rejected, (state, action)=>{
      state.error = true;
      state.loading = false;
    })
    builder.addCase(getFavouriteFilmByIdThunk.pending,(state, action)=>{
      state.error = false;
      state.loading = true;
    })
    builder.addCase(getFavouriteFilmByIdThunk.fulfilled, (state, action)=>{
      state.error = false;
      state.loading = false;
      state.favorites.push(moveToFilmViewType(action.payload));
    })
    builder.addCase(getFavouritesFilmsThunk.rejected, (state,action)=>{
      state.error = true;
      state.loading = false;
    })
    builder.addCase(getFavouritesFilmsThunk.pending, (state,action)=>{
      state.error = false;
      state.loading = true;
    })
    builder.addCase(getFavouritesFilmsThunk.fulfilled, (state,action)=>{
      state.error = false;
      state.loading = false;
      action.payload.forEach((filmApi)=>{
        state.favorites.push(moveToFilmViewType(filmApi));
      })
    })
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;