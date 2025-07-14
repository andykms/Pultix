import type { TFilmApi } from "../../../types/api/Film";
import type { TFilm } from "../../../types/views/RegistrationPage";

export function moveToFilmViewType(filmApi: TFilmApi): TFilm {
  const fees = [];

  if(filmApi.fees) {
    if(filmApi.fees.russia?.value) {
      fees.push({...filmApi.fees.russia, country: 'Россия'});
    }
    if(filmApi.fees.world?.value) {
      fees.push({...filmApi.fees.world, country: 'Мир'});
    }
  }

  return {
        _id: filmApi.id,
        posterUrl: filmApi.poster?.url || undefined,
        title: filmApi.name || filmApi.alternativeName||'',
        raiting: Object.values(filmApi.rating).find((item) => item !== null && item > 0) || undefined,
        year: filmApi.year || undefined,
        genres: filmApi.genres?.map((item)=> item.name) || undefined,
        description:filmApi.description || undefined,
        actors: filmApi.persons?.filter((item)=>item.enProfession==='actor').map((item)=> {return {...item, photoUrl: item.photo || undefined, _id: item.id}}) || undefined,
        filmCrew: filmApi.persons?.filter((item)=>item.enProfession !== 'actor').map((item)=> {return {...item, photoUrl: item.photo || undefined, _id: item.id}}) || undefined,
        facts: filmApi.facts || undefined,
        filmDistribution: {
          budget: filmApi.budget,
          fees: fees,
          premierWorld: filmApi.premiere?.world || undefined,
          premierRussia: filmApi.premiere?.russia || undefined,
        },
        trailerUrl: filmApi.videos?.trailers.find((item)=>item.url.length > 0)?.url ||undefined,
        movieLength: filmApi.movieLength || undefined,
        similarMovies: filmApi.similarMovies?.map((item)=>{return {...item, _id: item.id.toString(), title: item.name, rating: Object.values(item.rating).find((item)=> item && item > 0) || undefined}}),
        ageRaiting: filmApi.ageRaiting || undefined,
      }
}