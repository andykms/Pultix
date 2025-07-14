import type { DropdownProps, TParameter } from "./type";
import styles from "./Dropdown.module.scss";
import { useState } from "react";
import { ButtonUI } from "../Button/Button";
import { DropdownParam } from "../DropdownParam/DropdownParam";
import clsx from "clsx";

export const Dropdown: React.FC<DropdownProps> = ({
  params,
  onChoose,
  title,
  isScrollable,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdownContainer}>
      <ButtonUI type="tertiary" width="100%" onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.titleContainer}>
          <span className={"title"}>{title}</span>
          <svg
            fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            width="30px"
            height="30px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="3"
            stroke="var(--main-text-color)"
          >
            <polyline points="6.53 18.86 33.16 44.12 57.42 18.86" />
          </svg>
        </div>
      </ButtonUI>
      {isOpen && (
        <div
          className={clsx(styles.dropdown, isScrollable && styles.scrollable)}
        >
          {params.map((param: TParameter) => (
            <DropdownParam
              key={param.id}
              parameter={param}
              onChoose={onChoose}
            />
          ))}
        </div>
      )}
    </div>
  );
};
