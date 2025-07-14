export const SEARCH_PARAMS = {
  RATING: 'rating.kp',
  YEAR: "year",
  GENRE: 'genres.name'
}

export const SEARCH_OPERATIONS = {
  INCLUDE: '%2B',
}

export type TSearchParam = {
  value: string[];
  key: string;
};

export const createSearchUrl = (params: TSearchParam[]) => {
  let url = '';
  params.forEach((param)=>{
    const {key, value} = param;
    if(value.length > 0) {
      value.forEach((includeValue)=>{
        url+=`${key}=${includeValue}&`
      })
    }
  })
  if(url.endsWith('&')) {
    url = url.slice(0, url.length - 1);
  }
  return url;
}