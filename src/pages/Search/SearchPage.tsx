import { GalleryInfinite } from '../../widgets/GalleryInfinite/GalleryInfinite';
import { Link } from 'react-router-dom';
import { SearchField } from '../../widgets/SearchField/SearchField';
import { FilmCardUI } from '../../shared/ui/FilmCard/FilmCard';
import { ButtonClose } from '../../shared/ui/ButtonClose/ButtonClose';
import type { SearchPageProps } from './type';
import styles from './SearchPage.module.scss';
import { ButtonBack } from '../../shared/ui/ButtonBack/ButtonBack';

export const SearchPage: React.FC<SearchPageProps> = (props: SearchPageProps) => {
  const { films, infiniteScrollProps, searchValue } = props;

  return (
    <div className={styles.movieContainer}>
      <div className={styles.navigation}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <ButtonBack onClose={() => {}}></ButtonBack>
        </Link>
        <SearchField searchValue={searchValue}></SearchField>
      </div>
      <div className={styles.films}>
        {!infiniteScrollProps.hasMore && films.length <= 0 ? (
          <div className={styles.notFoundTitle}>
            <span className='big-title'>
              {`К сожалению, ничего не нашлось ${String.fromCodePoint(128532)}, но попробуйте другими
            словами ${String.fromCodePoint(128522)}`}
            </span>
          </div>
        ) : (
          <GalleryInfinite
            CardType={FilmCardUI}
            title='Результаты'
            cardProps={films}
            InfiniteScrollProps={infiniteScrollProps}
          ></GalleryInfinite>
        )}
      </div>
    </div>
  );
};
