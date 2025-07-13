import styles from "./FilmAbout.module.scss";
import type { FilmAboutProps } from "./type";
import clsx from "clsx";
import { DropdownText } from "../DropdownText/DropdownText";
import { CriticInfo } from "../CriticInfo/CriticInfo";

export const FilmAbout: React.FC<FilmAboutProps> = (props: FilmAboutProps) => {
  const {
    title,
    raiting,
    year,
    description,
    genres,
    movieLength,
    ageRaiting,
    countries,
  } = props;

  
  const hours =  movieLength ? Math.floor(movieLength / 60) : undefined;
  const minutes = movieLength ? movieLength % 60 : undefined;
  const movieLengthString = hours && minutes ? `${hours > 0 ? `${hours} ч ` : ""}${minutes} мин` : undefined;

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.mainInfo}>
        <h2 className={"mega-title"}>{title}</h2>
        <div className={styles.filmAbout}>
          {raiting ? (
            <CriticInfo title="" value={raiting}></CriticInfo>
          ) : (
            <span className="description">Без рейтинга</span>
          )}
          {year && <span className="description">{year}</span>}
          {genres && (
            <div className={styles.genresContainer}>
              {genres.map((genre, index) => {
                return (
                  <span className={clsx("description", styles.genre)}>
                    {genre}
                    {index < genres.length - 1 ? ', ' : ''}
                  </span>
                );
              })}
            </div>
          )}
          {countries && (
            <div className={styles.countriesContainer}>
              {countries.map((country) => {
                return (
                  <span className={clsx("description", styles.genre)}>
                    {country}
                  </span>
                );
              })}
            </div>
          )}
          {ageRaiting && <span className="description">{ageRaiting}+</span>}
          {movieLengthString && <span className="description">{movieLengthString}</span>}
        </div>
      </div>
      {description && (
        <div className={styles.descriptionContainer}>
          <DropdownText text={description}></DropdownText>
        </div>
      )}
    </div>
  );
};
