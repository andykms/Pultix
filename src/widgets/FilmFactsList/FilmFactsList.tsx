import styles from "./FilmFactsList.module.scss";
import type { FilmFactsListProps } from "./type";
import { FilmFact } from "../../shared/ui/FilmFact/FilmFact";

export const FilmFactsList: React.FC<FilmFactsListProps> = ({ facts }) => {
  return (
    <div className={styles.filmFactsList}>
      {facts.map((fact, index) => (
        <FilmFact key={index} value={fact.value} spoiler={fact.spoiler} />
      ))}
    </div>
  );
};
