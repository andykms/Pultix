type TFilm = {
  _id: string;
  posterUrl?: string;
  title: string;
  raiting?: number;
  maxRaiting: number;
  year?: number;
  isArticle?: boolean;
}

export interface AddFavouriteModalProps {
  onChangeFavourites: ()=>void;
  onCloseModal: ()=> void;
  film: TFilm;
}