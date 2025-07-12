import styles from "./ActorCard.module.scss";
import type { ActorCardProps } from "./type";
import { DropdownText } from "../DropdownText/DropdownText";

export const ActorCard: React.FC<ActorCardProps> = (props: ActorCardProps) => {
  const { _id, photoUrl, name, description } = props;

  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.photo}
        src={photoUrl}
        alt={`Фото актера ${name}`}
      />
      <div className={styles.about}>
        <h4 className="buttonTitle">{name}</h4>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};
