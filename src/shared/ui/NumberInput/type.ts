export interface NumberInputProps {
  valueMin: string;
  valueMax: string;
  onChangeMin: (value: string) => void;
  onChangeMax: (value: string) => void;
  title: string;
  placeholderMin?: string;
  placeholderMax?: string;
  titleMin: string;
  titleMax: string;
  maxLength: number;
  minLength: number;
  max: number;
  min: number;
  step: number;
}
