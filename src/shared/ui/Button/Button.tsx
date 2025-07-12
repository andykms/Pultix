import styles from "./Button.module.scss";
import type { ButtonProps } from "./type";

export const ButtonUI: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, width, children, onClick, style, disabled } = props;

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      style={{ width, ...style }}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
};
