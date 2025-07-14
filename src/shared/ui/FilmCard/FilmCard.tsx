import type { FilmCardProps } from './type';
import styles from './FilmCard.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

export const FilmCardUI: React.FC<FilmCardProps> = (props: FilmCardProps) => {
  const { _id, posterUrl, title, raiting, year, isArticle, width } = props;
  const location = useLocation();

  return (
    <div className={styles.filmCard} style={width ? { width } : {}}>
      <Link
        to={`/films/${_id}`}
        state={{ background: location }}
        className={styles.imageContainer}
        style={isArticle ? { transform: 'none' } : {}}
      >
        {posterUrl ? (
          <img src={posterUrl} alt={`Постер к фильму ${title}`} />
        ) : (
          <div className={styles.noImage}>
            <svg
              width='50%'
              height='50%'
              viewBox='0 0 16 16'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path
                fill='#444'
                d='M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z'
              ></path>
            </svg>
          </div>
        )}
      </Link>
      <div className={styles.filmCardInfo}>
        {!isArticle ? (
          <Link className={'title'} to={`/films/${_id}`}>
            {title}
          </Link>
        ) : (
          <div className={styles.title}>
            <span className={'buttonTitle'}>{title}</span>
          </div>
        )}
        <div className={clsx(styles.filmCardAbout, 'description')}>
          <p>{raiting ? `${raiting}/10` : 'Без рейтинга'}</p>
          <p>{year ? year : ''}</p>
        </div>
      </div>
    </div>
  );
};
