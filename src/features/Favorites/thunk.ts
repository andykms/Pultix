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
  async (data: {favorites: {_id: string}[], allFavouritesIds: string[]}) => {
    const result: TFilmApi[] = [];

    const allFavoritesIdsHashed: Set<string> = new Set();

    data.allFavouritesIds.forEach((id: string)=>{
      allFavoritesIdsHashed.add(id);
    });

    data.favorites.forEach((item)=>{
      if(allFavoritesIdsHashed.has(item._id)) {
        allFavoritesIdsHashed.delete(item._id);
      }
    });

    const requiredToAddFavorites = Array.from(allFavoritesIdsHashed);

    let index = 0;

    for (const id of requiredToAddFavorites) {
      getFilmById(id).then(film => result.push(film));
      index +=1;
      if(index >= 50) {
        break;
      }
    }
    return result;
  }
);