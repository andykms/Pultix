import { GalleryInfinite } from '../../widgets/GalleryInfinite/GalleryInfinite';
import { Link } from 'react-router-dom';
import { SearchField } from '../../widgets/SearchField/SearchField';
import { FilmCardUI } from '../../shared/ui/FilmCard/FilmCard';
import type { FavoritesPageProps } from './type';
import styles from './FavoritesPage.module.scss';
import { ButtonBack } from '../../shared/ui/ButtonBack/ButtonBack';
import { ButtonToggleTheme } from '../../shared/ui/ButtonToggleTheme/ButtonToggleTheme';

export const FavoritesPage: React.FC<FavoritesPageProps> = (props: FavoritesPageProps) => {
  const { favorites, infiniteScrollProps, countFavorites } = props;

  return (
    <div className={styles.movieContainer}>
      <div className={styles.navigation}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <ButtonBack onClose={() => {}}></ButtonBack>
        </Link>
        <SearchField searchValue=''></SearchField>
      </div>
      <div className={styles.films}>
        {countFavorites === 0 ? (
          <div className={styles.empty}>
            <span className='big-title' style={{ lineHeight: '50px' }}>
              {`В избранном пусто ${String.fromCodePoint(128566)}`}
            </span>
          </div>
        ) : (
          <GalleryInfinite
            CardType={FilmCardUI}
            title='Избранное'
            cardProps={favorites}
            InfiniteScrollProps={infiniteScrollProps}
          ></GalleryInfinite>
        )}
      </div>
      <ButtonToggleTheme></ButtonToggleTheme>
    </div>
  );
};
