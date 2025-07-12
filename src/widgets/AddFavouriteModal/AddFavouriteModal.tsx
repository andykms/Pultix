import type { AddFavouriteModalProps } from "./type";
import { Modal } from "../../shared/ui/Modal/Modal";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";
import { ButtonUI } from "../../shared/ui/Button/Button";
import styles from './AddFavouriteModal.module.scss';

export const AddFavouriteModal: React.FC<AddFavouriteModalProps> = (
  props: AddFavouriteModalProps
) => {
  const { film, onChangeFavourites, onCloseModal } = props;

  return (
    <Modal title="Добавить в избранное?" onClose={() => onCloseModal()} width="60vw">
      <div className={styles.CardContainer}><FilmCardUI {...film} isArticle={true} width={"auto"}></FilmCardUI></div>
      <div className={styles.buttonsContainer}>
      <ButtonUI
        type="primary"
        onClick={() => {
          onCloseModal();
          onChangeFavourites();
        }}
        width="200px"
      >
        <span className="buttonTitle">Добавить</span>
      </ButtonUI>
      <ButtonUI
        type="tertiary"
        onClick={() => {
          onCloseModal();
        }}
        width="200px"
      >
        <span className="title">Отмена</span>
      </ButtonUI>
      </div>
    </Modal>
  );
};
