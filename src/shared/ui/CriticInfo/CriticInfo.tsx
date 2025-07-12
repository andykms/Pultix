import styles from "./CriticInfo.module.scss";
import clsx from "clsx";

export const CriticInfo = (props: { title: string; value: number }) => {
  const { title, value } = props;

  let classNameValue;
  if (value > 7) {
    classNameValue = styles["high"];
  } else if (value > 5) {
    classNameValue = styles["medium"];
  } else {
    classNameValue = styles["low"];
  }

  return (
    <>
      <div className={styles.critics}>
        <span className={"buttonTitle"}>{props.title}</span>
        <span className={clsx("buttonTitle", styles.value, classNameValue)}>
          {props.value}
        </span>
      </div>
    </>
  );
};
