import type { InputProps } from './type';
import styles from './Input.module.scss';

export const InputUI = ({
  onChange,
  value,
  placeholder,
  title,
  width,
  children,
  maxLength,
  minLength,
  maxValue,
  minValue,
  type,
  step,
}: InputProps) => {
  return (
    <div className={styles.inputContainer} style={{ width }}>
      <span className={'text'}>{title}</span>
      <label className={styles.label} style={{ width: '100%' }}>
        <input
          className={styles.input}
          type={type ? type : 'text'}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          {...(maxValue !== undefined && { max: Number(maxValue) })}
          {...(minValue !== undefined && { min: Number(minValue) })}
          {...(step && { step })}
        />
        {children}
      </label>
    </div>
  );
};
