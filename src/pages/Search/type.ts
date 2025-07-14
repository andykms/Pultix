import type { FilmCardProps } from '../../shared/ui/FilmCard/type';
import type { TInfiniteScrollProps } from '../../widgets/GalleryInfinite/type';

export interface SearchPageProps {
  films: FilmCardProps[];
  infiniteScrollProps: TInfiniteScrollProps;
  searchValue: string;
}
