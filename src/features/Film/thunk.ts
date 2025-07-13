import { getFilmById, getFilms, getFilmsBySearchParams, type TSearchParam } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TFilm } from "../../types/views/RegistrationPage";

export const getFilmsBySearchThunk = createAsyncThunk(
  "film/getFilms",
  async (searchParams: TSearchParam) => {
    const response = await getFilmsBySearchParams(searchParams);
    return response;
  }
);

export const getFilmByIdThunk = createAsyncThunk(
  "film/getFilm",
  async (id: string) => {
    const response = await getFilmById(id);
    return response;
  }
);

export const getFilmsThunk = createAsyncThunk(
  "film/getFilms",
  async (limit: number|string) => {
    const response = await getFilms(limit);
    return response;
  }
);