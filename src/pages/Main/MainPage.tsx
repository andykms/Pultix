import styles from "./MainPage.module.scss";
import type { MainPageProps } from "./type";
import { GalleryDemo } from "../../widgets/GalleryDemo/GalleryDemo";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";
import { Header } from "../../stories/Header";

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
  const { favourites, films } = props;




  return (
    <div className={styles.main}>
      <Header></Header>
      <GalleryDemo
        to="/favorites"
        CardType={FilmCardUI}
        cardProps={favourites}
        title="Избранное"
      ></GalleryDemo>
      <GalleryDemo
        to="/movies"
        CardType={FilmCardUI}
        cardProps={films}
        title={"Все"}
      ></GalleryDemo>
    </div>
  );
};
