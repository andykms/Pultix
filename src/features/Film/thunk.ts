import { getFilmById, getFilms, getFilmsBySearchParams, getFilmsByName } from '../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFilmsBySearchThunk = createAsyncThunk(
  'film/getFilmsBySearch',
  async (data: { searchParams: string; page: number; limit: number }) => {
    const response = await getFilmsBySearchParams(data.searchParams, data.page, data.limit);
    return response;
  },
);

export const getFilmByIdThunk = createAsyncThunk('film/getFilm', async (id: string) => {
  const response = await getFilmById(id);
  return response;
});

export const getFilmsThunk = createAsyncThunk(
  'film/getFilms',
  async (data: { page: number; limit: number | string }) => {
    const response = await getFilms(data.page, data.limit);
    return response;
  },
);

export const getShowCaseFilmsThunk = createAsyncThunk('film/getShowCaseFilms', async () => {
  const response = await getFilmsBySearchParams('', 1, 5);
  return response;
});

export const getSearchFilmsThunk = createAsyncThunk(
  'film/getSearchFilms',
  async (data: { query: string; page: number; limit: number }) => {
    const response = await getFilmsByName(data.query, data.page, data.limit);
    return response;
  },
);
