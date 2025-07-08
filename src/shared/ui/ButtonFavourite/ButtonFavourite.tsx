import styles from "./ButtonFavourite.module.scss";
import { ButtonUI } from "../Button/Button";
import type { ButtonFavouriteProps } from "./type";

export const ButtonFavourite: React.FC<ButtonFavouriteProps> = ({
  onClick,
  isInFavourites,
}: ButtonFavouriteProps) => {
  return (
    <ButtonUI type="tertiary" onClick={onClick} width="240px">
      <div className={styles.favourite}>
        <span className="title">
          {isInFavourites ? "+ Избранное" : "- Избранное"}
        </span>
        <svg
          width="60px"
          height="60px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill={isInFavourites ? "yellow" : "none"}
          stroke="#ffffff"
          className={styles.favouriteIcon}
        >
          <polygon points="32 12 38.41 24.84 52 27.28 42.37 37.66 44.36 52 32 45.58 19.64 52 21.63 37.66 12 27.28 25.59 24.84 32 12" />
        </svg>
      </div>
    </ButtonUI>
  );
};
