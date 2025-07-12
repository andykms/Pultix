export interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary'|'opacity';
  width: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

