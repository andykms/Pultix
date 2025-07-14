import styles from './FilmModal.module.scss';
import type { FilmModalProps } from './type';
import { Modal } from '../../shared/ui/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { ButtonUI } from '../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { ButtonFavourite } from '../../shared/ui/ButtonFavourite/ButtonFavourite';
import { FilmAbout } from '../../shared/ui/FilmAbout/FilmAbout';
import { ButtonClose } from '../../shared/ui/ButtonClose/ButtonClose';
import { useState } from 'react';
import { AddFavouriteModal } from '../AddFavouriteModal/AddFavouriteModal';

export const FilmModal: React.FC<FilmModalProps> = (props: FilmModalProps) => {
  const navigate = useNavigate();

  const { film, isInFavourites, onChangeInFavourites } = props;
  const [isOpenModalFavourites, setIsOpenModalFavourites] = useState(false);

  return (
    <>
      <Modal onClose={() => {}} withoutModalHeader={true} width='100%'>
        <div className={styles.filmModal} style={{ backgroundImage: `url(${film.posterUrl})` }}>
          <div className={styles.buttonCloseContainer}>
            <ButtonClose onClose={() => navigate(-1)}></ButtonClose>
          </div>
          <FilmAbout {...film}></FilmAbout>
          <div className={styles.navigation}>
            <Link to={`/films/detail/${film._id}`} className={styles.buttonLink}>
              <ButtonUI type='primary' width='100%'>
                <span className='buttonTitle'>Подробнее</span>
              </ButtonUI>
            </Link>
            <ButtonFavourite
              onClick={() => {
                isInFavourites ? onChangeInFavourites(film._id) : setIsOpenModalFavourites(true);
              }}
              isInFavourites={isInFavourites}
            ></ButtonFavourite>
          </div>
        </div>
      </Modal>
      {isOpenModalFavourites && (
        <AddFavouriteModal
          film={film}
          onChangeFavourites={onChangeInFavourites}
          onCloseModal={() => setIsOpenModalFavourites(false)}
        ></AddFavouriteModal>
      )}
    </>
  );
};
