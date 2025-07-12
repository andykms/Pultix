import type { NumberInputProps } from "./type";
import styles from "./NumberInput.module.scss";
import { InputUI } from "../Input/Input";

export const NumberInput = (props: NumberInputProps) => {
  const {
    valueMax,
    valueMin,
    onChangeMax,
    onChangeMin,
    title,
    placeholderMax,
    placeholderMin,
    titleMin,
    titleMax,
    maxLength,
    minLength,
    step,
    max,
    min,
  } = props;

  return (
    <div className={styles.numberInputContainer}>
      <span className={"buttonTitle"}>{title}</span>
      <div className={styles.numberInput}>
        <InputUI
          value={valueMin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeMin(e.target.value)
          }
          title={""}
          placeholder={placeholderMin || ""}
          width="100px"
          maxLength={maxLength}
          minLength={minLength}
          maxValue={max}
          minValue={min}
          type='number'
          step={step}
        >
          <span className="description">{titleMin}</span>
        </InputUI>
        <InputUI
          type='number'
          value={valueMax}
          maxValue={max}
          minValue={min}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeMax(e.target.value)
          }
          title={""}
          placeholder={placeholderMax || ""}
          width="100px"
          maxLength={maxLength}
          minLength={minLength}
          step={step}
        >
          <span className="description">{titleMax}</span>
        </InputUI>
      </div>
    </div>
  );
};
