import type { TFilmApi,TFilmApiLimitReposponse } from "../types/api/Film";

const apiUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_X_API_KEY;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));


export function getFilms(limit: number|string): Promise<TFilmApi[]> {
  return fetch(`${apiUrl}/${limit}?limit=${limit}`,{
    method: "GET",
    headers: {
      'X-API-KEY': apiKey
    },
  })
    .then(response => checkResponse<TFilmApiLimitReposponse>(response))
    .then(response => response.docs)
}

export function getFilmById(id: number|string): Promise<TFilmApi> {
  return fetch(`${apiUrl}/${id}`,{
    method: "GET",
    headers: {
      'X-API-KEY': apiKey
    },
  })
    .then(response => checkResponse<TFilmApi>(response))
}

export type TSearchParam = {
  years?: string[];
  raiting?: {
    from: string|number;
    to: string|number; 
  }
  genre: string[];
}

export function getFilmsBySearchParams(params: TSearchParam): Promise<TFilmApi[]> {
  let resultUrl = `${apiUrl}/movie?`;
  if(params.years) {
    params.years.forEach((year)=>{
      resultUrl += `year=${year}`;
      resultUrl += '&';
    })
  }
  if(params.raiting) {
    resultUrl += `rating=${params.raiting.from}-${params.raiting.to}&`;
  }
  if(params.genre) {
    params.genre.forEach((genre)=>{
      resultUrl += `genres.name=${genre}`;
      resultUrl += '&';
    })
  }
  if(resultUrl.endsWith('&')) {
    resultUrl = resultUrl.slice(0, resultUrl.length - 1);
  }

  return fetch(resultUrl,{
    method: "GET",
    headers: {
      'X-API-KEY': apiKey
    },
  })
    .then(response => checkResponse<TFilmApiLimitReposponse>(response))
    .then(response => response.docs)
}

export const postFavouriteId = (id: string) => {
  if(localStorage.getItem('favourite') === null) {
    localStorage.setItem('favourite', id);
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        id: id
      });
    });
  }
  localStorage.setItem('favourite', `${localStorage.getItem('favourite')}_${id}`);
  return new Promise((resolve, reject) => {
    resolve({
      success: true,
      id: id
    });
  });
}

export const getFavouriteIds = (): {id: string[]|null, success: boolean} => {
  if(!localStorage.getItem('favourite')) {
    return {id: null, success: false};
  }
  return {id: localStorage.getItem('favourite')!.split('_'), success: true};
}

export const deleteFavouriteId = (id: string): {id: string|null, success: boolean} => {
  if(localStorage.getItem('favourite') === null) {
    return {id: null, success: true};
  }
  localStorage.setItem('favourite', localStorage.getItem('favourite')!.replace(`_${id}`, ''));
  return {id: id, success: true};
}