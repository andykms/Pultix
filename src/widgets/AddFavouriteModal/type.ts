type TFilm = {
  _id: string;
  posterUrl?: string;
  title: string;
  raiting?: number;
  year?: number;
  isArticle?: boolean;
};

export interface AddFavouriteModalProps {
  onChangeFavourites: (id: string) => void;
  onCloseModal: () => void;
  film: TFilm;
}
