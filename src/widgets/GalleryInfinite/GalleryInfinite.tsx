import type React from 'react';
import styles from './GalleryInfinite.module.scss';
import type { GalleryInfiniteProps } from './type';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery } from '../Gallery/Gallery';

export const GalleryInfinite: React.FC<GalleryInfiniteProps> = (props: GalleryInfiniteProps) => {
  const { InfiniteScrollProps, title, cardProps, CardType } = props;
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryHeader}>
        <h2 className={'big-title'}>{title}</h2>
      </div>
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        {...{
          ...InfiniteScrollProps,
          loader: <div className={styles.loader}>{InfiniteScrollProps.loader}</div>,
        }}
      >
        <div className={styles.gallery}>
          <Gallery CardProps={cardProps} CardType={CardType}></Gallery>
        </div>
      </InfiniteScroll>
    </section>
  );
};
