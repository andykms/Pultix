export interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  title?: string;
  width: string;
  children?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  type?: string;
  maxValue?: number | string;
  minValue?: number | string;
  step?: number;
}
