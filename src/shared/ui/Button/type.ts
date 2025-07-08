export interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary';
  width: string;
  children: React.ReactNode;
  onClick?: () => void;
}