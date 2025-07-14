import type { SearchWithGalleryProps } from './type';
import styles from './SearchWithGallery.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { SearchField } from '../SearchField/SearchField';
import { Link } from 'react-router-dom';

export const SearchWithGallery: React.FC<SearchWithGalleryProps> = (
  props: SearchWithGalleryProps,
) => {
  const { films } = props;
  const [currentImg, setCurrentImg] = useState(0);
  const [nextImg, setNextImg] = useState(1);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (films.length <= 1) return;
    console.log(films.map((item) => item.title));
    const timer = setInterval(() => {
      setDirection('left');
      startAnimation();
    }, 5000);

    return () => clearInterval(timer);
  }, [films]);

  const startAnimation = () => {
    setIsAnimating(true);
    setNextImg((currentImg + 1) % films.length);
  };

  const handleAnimationEnd = () => {
    if (!isAnimating) return;

    setIsAnimating(false);
    setCurrentImg(nextImg);
  };

  if (films.length === 0)
    return (
      <div className={styles.carousel}>
        <SearchField searchValue=''></SearchField>
      </div>
    );

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.card} ${isAnimating ? styles.leave : ''}`}
        data-direction={direction}
      >
        <img
          src={films[currentImg].posterUrl}
          alt={films[currentImg].title}
          className={styles.image}
        />
      </div>
      {isAnimating && (
        <div
          className={`${styles.card} ${styles.enter}`}
          data-direction={direction}
          onAnimationStart={startAnimation}
          onAnimationEnd={handleAnimationEnd}
        >
          <span className='title'>{films[nextImg].title}</span>
          <img src={films[nextImg].posterUrl} alt={films[nextImg].title} className={styles.image} />
        </div>
      )}
      <div className={styles.searchContainer}>
        <SearchField searchValue=''></SearchField>
      </div>
    </div>
  );
};
