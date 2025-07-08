import type { FilmCardProps } from "./type";
import styles from "./FilmCard.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

export const FilmCardUI: React.FC<FilmCardProps> = (props: FilmCardProps) => {
  const { _id, posterUrl, title, raiting, maxRaiting, year } = props;

  return (
    <div className={styles.filmCard}>
      <Link to={`/film/${_id}`} className={styles.imageContainer}>
        {posterUrl?<img src={posterUrl} alt={`Постер к фильму ${title}`} />:<div className={styles.noImage}></div>}
      </Link>
      <div className={styles.filmCardInfo}>
        <Link className={"title"} to={`/film/${_id}`}>
          {title}
        </Link>
        <div className={clsx(styles.filmCardAbout, "description")}>
          <p>{`${raiting}/${maxRaiting}`}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};
