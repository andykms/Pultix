import type { ButtonLinkProps } from './type';
import { ButtonUI } from '../Button/Button';
import { Link } from 'react-router-dom';

export const ButtonLink: React.FC<ButtonLinkProps> = (props: ButtonLinkProps) => {
  const { type, width, children, onClick, to } = props;

  return (
    <Link to={to}>
      <ButtonUI type={type} width={width} onClick={onClick}>
        {children}
      </ButtonUI>
    </Link>
  );
};
