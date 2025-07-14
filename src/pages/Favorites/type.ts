import type { FilmCardProps } from '../../shared/ui/FilmCard/type';
import type { TInfiniteScrollProps } from '../../widgets/GalleryInfinite/type';

export interface FavoritesPageProps {
  favorites: FilmCardProps[];
  infiniteScrollProps: TInfiniteScrollProps;
  countFavorites: number;
}
