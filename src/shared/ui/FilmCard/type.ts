export interface FilmCardProps {
  _id: string;
  posterUrl?: string;
  title: string;
  raiting?: number;
  year?: number;
  isArticle?: boolean;
  width?: string;
  onClick?: (film: FilmCardProps) => void;
}
