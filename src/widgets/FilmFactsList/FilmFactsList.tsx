import styles from "./FilmFactsList.module.scss";
import type { FilmFactsListProps } from "./type";
import { FilmFact } from "../../shared/ui/FilmFact/FilmFact";
import { forwardRef } from "react";

export const FilmFactsList: React.FC<FilmFactsListProps> = forwardRef(({ facts }, ref?: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.filmFactsList} ref={ref}>
      {facts.map((fact, index) => (
        <FilmFact key={index} value={fact.value} spoiler={fact.spoiler} />
      ))}
    </div>
  );
});
