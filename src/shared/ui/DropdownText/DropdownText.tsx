import styles from "./Dropdown.module.scss";
import { ButtonUI } from "../Button/Button";
import { useState } from "react";

export const DropdownText = (props: { text: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { text } = props;
  return (
    <div className={styles.container}>
      <div
        className={isOpen ? styles.fullDescription : styles.hiddenDescription}
      >
        <span className="text" style={isOpen ? {color:'var(--widgets-color)'} : {}}>{text}</span>
        {isOpen && (
          <ButtonUI
            width="100px"
            type="tertiary"
            onClick={() => setIsOpen(false)}
          >
            <span className="text" style={isOpen ? {color:'var(--widgets-color)'} : {}}>Скрыть</span>
          </ButtonUI>
        )}
      </div>
      {!isOpen && (
        <ButtonUI width="100px" type="tertiary" onClick={() => setIsOpen(true)}>
          <span className="text">Раскрыть</span>
        </ButtonUI>
      )}
    </div>
  );
};
