import styles from "./FilmAboutDetail.module.scss";
import type { FilmAboutDetailProps } from "./type";
import { BlockInfo } from "../BlockInfo/BlockInfo";
import { CriticInfo } from "../CriticInfo/CriticInfo";
import { FilmFact } from "../FilmFact/FilmFact";
import { forwardRef } from "react";

export const FilmAboutDetail: React.FC<FilmAboutDetailProps> = forwardRef(({
  _id,
  title,
  raiting,
  description,
  year,
  genres,
  movieLength,
  ageRaiting,
  countries,
}: FilmAboutDetailProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
  const hours = movieLength? Math.floor(movieLength / 60): undefined;
  const minutes =movieLength? movieLength % 60:undefined;
  const movieLengthString = hours&&hours ? `${hours > 0 ? `${hours} ч ` : ""}${minutes} мин`: undefined;


  return (
    <section className={styles.filmAbout} ref={ref}>
      <div className={styles.titleContainer}>
        <span className={"big-title"}>{title}</span>
      </div>
      <div className={styles.filmInfo}>
      {raiting && (
      <div className={styles.raitingContainer}>
        <span className="title">
          Рейтинг
        </span>
        <CriticInfo title="" value={raiting}></CriticInfo>
      </div>
      )}
      {year && (
        <BlockInfo
          title="Год"
          blocks={[{ title: year.toString() }]}
        ></BlockInfo>
      )}
      {genres && (
        <BlockInfo
          title={"Жанры"}
          blocks={genres.map((item) => {
            return { title: item };
          })}
        />
      )}
      {countries && (
        <BlockInfo
          title={"Страна"}
          blocks={countries.map((item) => {
            return { title: item };
          })}
        />
      )}
      {movieLengthString && <BlockInfo
        title="Длительность"
        blocks={[{ title: movieLengthString }]}
      ></BlockInfo>}
      {ageRaiting && (
        <BlockInfo
          title="Ограничение"
          blocks={[{ title: ageRaiting.toString() + '+'}]}
        ></BlockInfo>
      )}
      </div>
      {description && (
        <div className={styles.description}>
          <span className="title">Описание:</span>
          <FilmFact value={description} spoiler={false}></FilmFact>
        </div>
      )}
    </section>
  );
});
