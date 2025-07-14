export interface ButtonLinkProps {
  type: 'primary' | 'secondary' | 'tertiary';
  width: string;
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
}
