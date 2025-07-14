import styles from "./MainPage.module.scss";
import type { MainPageProps } from "./type";
import { GalleryDemo } from "../../widgets/GalleryDemo/GalleryDemo";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";
import { SearchWithGallery } from "../../widgets/SearchWithGallery/SearchWithGallery";
import { Header } from "../../widgets/Header/Header";

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
  const { favourites, films } = props;




  return (
    <div className={styles.main}>
      <SearchWithGallery films={films.filter((item)=> {return Boolean(item.posterUrl)})}></SearchWithGallery>
      <GalleryDemo
        to="/favorites"
        CardType={FilmCardUI}
        cardProps={favourites}
        title="Избранное"
        maxCount={5}
        emptyMessage={<span className="big-title">Вы пока ничего не добавляли в избранное {String.fromCodePoint(128579)}</span>}
      ></GalleryDemo>
      <GalleryDemo
        to="/films"
        CardType={FilmCardUI}
        cardProps={films}
        title={"Все"}
        maxCount={5}
      ></GalleryDemo>
    </div>
  );
};
