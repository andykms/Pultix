import { GalleryDemo } from "../../widgets/GalleryDemo/GalleryDemo";
import type { FavoritesPageProps } from "./type";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";

export const FavoritesPage: React.FC<FavoritesPageProps> = (
  props: FavoritesPageProps
) => {
  const { favorites } = props;
  return (
    <GalleryDemo
      CardType={FilmCardUI}
      cardProps={favorites}
      to=""
      title="Избранное"
      maxCount={favorites.length}
    ></GalleryDemo>
  );
};
