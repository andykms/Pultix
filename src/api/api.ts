import type { TFilmApi, TFilmApiLimitReposponse } from '../types/api/Film';
import { REQUIRED_FIELDS } from './apiSearchParams';

const apiUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_X_API_KEY;
const apiSearchUrl = import.meta.env.VITE_API_MOVIE_SEARCH;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export function getFilms(page: number, limit: number | string): Promise<TFilmApi[]> {
  const url = new URL(apiUrl);
  REQUIRED_FIELDS.forEach((field) => {
    url.searchParams.append('notNullFields', field);
  });
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  return fetch(url.href, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
}

export function getFilmById(id: number | string): Promise<TFilmApi> {
  return fetch(`${apiUrl}/${id}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
    },
  }).then((response) => checkResponse<TFilmApi>(response));
}

export function getFilmsBySearchParams(
  search: string,
  page: number,
  limit: number,
): Promise<TFilmApi[]> {
  const url = new URL(apiUrl);
  REQUIRED_FIELDS.forEach((field) => {
    url.searchParams.append('notNullFields', field);
  });
  url.searchParams.append('limit', limit.toString());
  url.searchParams.append('page', page.toString());

  let resultUrl = url.href;
  if (search.length > 0) resultUrl += `&${search}`;
  return fetch(resultUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => {
      return response.docs;
    });
}

export function getFilmsByName(search: string, page: number, limit: number): Promise<TFilmApi[]> {
  const url = new URL(apiSearchUrl);
  url.searchParams.append('query', search);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  return fetch(url.href, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
}

export const postFavouriteId = (id: string): Promise<{ id: string; success: boolean }> => {
  if (localStorage.getItem('favourite') === null) {
    localStorage.setItem('favourite', id);
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        id: id,
      });
    });
  }
  localStorage.setItem('favourite', `${localStorage.getItem('favourite')}_${id}`);
  return new Promise((resolve, reject) => {
    resolve({
      success: true,
      id: id,
    });
  });
};

export const getFavouriteIds = (): {
  id: string[] | null;
  success: boolean;
} => {
  if (!localStorage.getItem('favourite')) {
    return { id: null, success: false };
  }

  const idsRaw = localStorage.getItem('favourite')!.split('_');
  const ids = idsRaw.filter((item) => item.length > 0);

  return { id: ids, success: true };
};

export const deleteFavouriteId = (id: string): { id: string | null; success: boolean } => {
  if (localStorage.getItem('favourite') === null) {
    return { id: null, success: true };
  }

  const ids = localStorage.getItem('favourite')?.split('_');
  let newValues = [];
  if (ids) {
    for (const curId of ids) {
      if (curId != id) {
        newValues.push(curId);
      }
    }
  }

  localStorage.setItem('favourite', newValues.join('_'));
  return { id: id, success: true };
};

export const getFilmBySearch = (query: string, limit: number): Promise<TFilmApi[]> => {
  let resultUrl = `${apiSearchUrl}?limit=${limit}&query=${query}`;
  return fetch(resultUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
};
