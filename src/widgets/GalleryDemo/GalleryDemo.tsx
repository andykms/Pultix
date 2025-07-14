import type { GalleryDemoProps } from './type';
import styles from './GalleryDemo.module.scss';
import { ButtonUI } from '../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { Gallery } from '../Gallery/Gallery';
import { forwardRef } from 'react';

export const GalleryDemo: React.FC<GalleryDemoProps> = forwardRef(
  (props: GalleryDemoProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
    const { CardType, cardProps, title, to, maxCount, isWithoutButtonAll, emptyMessage } = props;
    const cutCardProps: React.ComponentProps<React.ElementType> = cardProps.slice(
      0,
      maxCount ? maxCount : 3,
    );
    return (
      <section className={styles.galleryContainer} ref={ref}>
        <div className={styles.galleryHeader}>
          <h2 className='big-title'>{title}</h2>
          {!isWithoutButtonAll && (
            <Link to={to} className={styles.buttonMoreContainer} style={{ textDecoration: 'none' }}>
              <ButtonUI type='secondary' width='200px'>
                <span className='buttonTitle'>Смотреть все</span>
              </ButtonUI>
            </Link>
          )}
        </div>
        {cutCardProps.length > 0 ? (
          <div className={styles.gallery}>
            <Gallery CardType={CardType} CardProps={cutCardProps}></Gallery>
          </div>
        ) : (
          <div className={styles.emptyMessage}>{emptyMessage}</div>
        )}
      </section>
    );
  },
);
