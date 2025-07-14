import { getFilmById, getFilms, getFilmsBySearchParams, getFilmsByName } from '../../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFilmsBySearchThunk = createAsyncThunk(
  'film/getFilmsBySearch',
  async (data: { searchParams: string; limit: number }) => {
    const response = await getFilmsBySearchParams(data.searchParams, data.limit);
    return response;
  },
);

export const getFilmByIdThunk = createAsyncThunk('film/getFilm', async (id: string) => {
  const response = await getFilmById(id);
  return response;
});

export const getFilmsThunk = createAsyncThunk('film/getFilms', async (limit: number | string) => {
  const response = await getFilms(limit);
  return response;
});

export const getShowCaseFilmsThunk = createAsyncThunk('film/getShowCaseFilms', async () => {
  const response = await getFilms(50);
  return response;
});

export const getSearchFilmsThunk = createAsyncThunk(
  'film/getSearchFilms',
  async (query: string) => {
    const response = await getFilmsByName(query, 50);
    return response;
  },
);
