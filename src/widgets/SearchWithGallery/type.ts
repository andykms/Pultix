type TFilm = {
  _id: string;
  posterUrl?: string;
  title: string;
};

export interface SearchWithGalleryProps {
  films: TFilm[];
}
