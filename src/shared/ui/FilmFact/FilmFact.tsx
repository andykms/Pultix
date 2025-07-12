import styles from "./FilmFact.module.scss";
import type { FilmFactProps } from "./type";
import { useState } from "react";
import { ButtonUI } from "../Button/Button";
import clsx from "clsx";

export const FilmFact: React.FC<FilmFactProps> = ({ value, spoiler }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.fact, !isOpen && spoiler && styles.spoiler)}>
      {spoiler ? (
        isOpen ? (
          <span className="text">{value}</span>
        ) : (
          <ButtonUI
            onClick={() => setIsOpen(true)}
            type="tertiary"
            width="auto"
          >
            <span className="title">Внимание, спойлер!</span>
          </ButtonUI>
        )
      ) : (
        <span className="text">{value}</span>
      )}
    </div>
  );
};
