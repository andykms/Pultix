import styles from './Film.module.scss';
import type { FilmPageProps } from './type';
import { FilmAboutDetail } from '../shared/ui/FilmAboutDetail/FilmAboutDetail';
import { GalleryDemo } from '../widgets/GalleryDemo/GalleryDemo';
import { BudgetInfo } from '../widgets/BudgetInfo/BudgetInfo';
import { ButtonUI } from '../shared/ui/Button/Button';
import { AddFavouriteModal } from '../widgets/AddFavouriteModal/AddFavouriteModal';


export const FilmPage: React.FC<FilmPageProps> = (props: FilmPageProps) => {
  const {film} = props

  return (
  <section className={styles.filmPage}>
    <div className={styles.film}>
      <h1>{film.title}</h1>
      <div className={styles.buttonsNavigation}>
        {film.trailerUrl && <ButtonUI type="primary" width='auto'><a href={film.trailerUrl}><span className='title'>Смотреть трейлер</span></a></ButtonUI>}
        <ButtonUI type="secondary" width='300px'>Добавить в избранное</ButtonUI>
      </div>
    </div>
  </section>
  );
};