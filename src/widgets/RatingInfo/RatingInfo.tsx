import type React from 'react';
import styles from './RatingInfo.module.scss';
import type { RatingInfoProps } from './type';
import { CriticInfo } from '../../shared/ui/CriticInfo/CriticInfo';

export const RaitingInfo: React.FC<RatingInfoProps> = (props: RatingInfoProps) => {
  const { critics } = props;

  return (
    <>
      {props.critics ? (
        <div className={styles.ratingInfo}>
          {critics.kp && <CriticInfo title='Кинопоиск (kp)' value={critics.kp} />}
          {critics.imdb && (
            <CriticInfo title='Internet Movie Database (IMDB)' value={critics.imdb} />
          )}
          {critics.tmdb && <CriticInfo title='The Movie Database (TMDB)' value={critics.tmdb} />}
          {critics.filmCritics && <CriticInfo title='Кинокритики' value={critics.filmCritics} />}
          {critics.russianFilmCritics && (
            <CriticInfo title='Российские кинокритики' value={critics.russianFilmCritics} />
          )}
          {critics['await'] && <CriticInfo title='Ожидалось' value={critics['await']} />}
        </div>
      ) : (
        <span className={'buttonTitle'}>К сожалению, рейтингов не нашлось!</span>
      )}
    </>
  );
};
