import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavouriteIds, postFavouriteId, deleteFavouriteId } from "../../api/api";
import { getFilmById } from "../../api/api";
import type { TFilmApi } from "../../types/api/Film";

export const getFavoritesIdsThunk = createAsyncThunk(
  "favorites/getFavorites",
  async (_,) => {
    const response = await getFavouriteIds();
    return response;
  }
);

export const postFavoriteIdThunk = createAsyncThunk(
  "favorites/postFavorites",
  async (id: string,) => {
    return await postFavouriteId(id);
  }
);

export const deleteFavouriteIdThunk = createAsyncThunk(
  "favorites/deleteFavorites",
  async (id: string,) => {
    return await deleteFavouriteId(id);
  }
); 

export const getFavouriteFilmByIdThunk = createAsyncThunk(
  "film/getFilm",
  async (id: string) => {
    const response = await getFilmById(id);
    return response;
  }
);

export const getFavouritesFilmsThunk = createAsyncThunk(
  "film/getFilms",
  async (ids: string[]) => {
    const result: TFilmApi[] = [];
    for (const id of ids) {
      getFilmById(id).then(film => result.push(film));
    }
    return result;
  }
);