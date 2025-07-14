import styles from './ButtonFavourite.module.scss';
import { ButtonUI } from '../Button/Button';
import type { ButtonFavouriteProps } from './type';

export const ButtonFavourite: React.FC<ButtonFavouriteProps> = ({
  onClick,
  isInFavourites,
}: ButtonFavouriteProps) => {
  return (
    <ButtonUI type='tertiary' onClick={onClick} width='240px'>
      <div className={styles.favourite}>
        <span className='title'>{isInFavourites ? '- Удалить из избранного' : '+ Избранное'}</span>
      </div>
    </ButtonUI>
  );
};
