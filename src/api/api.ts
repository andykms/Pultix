import type { TFilmApi, TFilmApiLimitReposponse } from "../types/api/Film";

const apiUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_X_API_KEY;
const apiSearchUrl = import.meta.env.VITE_API_MOVIE_SEARCH;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export function getFilms(limit: number | string): Promise<TFilmApi[]> {
  return fetch(`${apiUrl}?limit=${limit}`, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
}

export function getFilmById(id: number | string): Promise<TFilmApi> {
  return fetch(`${apiUrl}/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
    },
  }).then((response) => checkResponse<TFilmApi>(response));
}


export function getFilmsBySearchParams(
  search: string,
  limit: number
): Promise<TFilmApi[]> {
  let resultUrl = `${apiUrl}?limit=${limit}&${search}`;
  return fetch(resultUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
}

export const postFavouriteId = (id: string) => {
  if (localStorage.getItem("favourite") === null) {
    localStorage.setItem("favourite", id);
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        id: id,
      });
    });
  }
  localStorage.setItem(
    "favourite",
    `${localStorage.getItem("favourite")}_${id}`
  );
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
  if (!localStorage.getItem("favourite")) {
    return { id: null, success: false };
  }
  return { id: localStorage.getItem("favourite")!.split("_"), success: true };
};

export const deleteFavouriteId = (
  id: string
): { id: string | null; success: boolean } => {
  if (localStorage.getItem("favourite") === null) {
    return { id: null, success: true };
  }
  localStorage.setItem(
    "favourite",
    localStorage.getItem("favourite")!.replace(`_${id}`, "")
  );
  return { id: id, success: true };
};

export const getFilmBySearch = (
  query: string,
  limit: number
): Promise<TFilmApi[]> => {
  let resultUrl = `${apiSearchUrl}?limit=${limit}&query=${query}`;
  return fetch(resultUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => checkResponse<TFilmApiLimitReposponse>(response))
    .then((response) => response.docs);
};
