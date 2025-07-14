import type { ModalProps } from './type';
import styles from './Modal.module.scss';
import { ButtonUI } from '../Button/Button';
import { ButtonClose } from '../ButtonClose/ButtonClose';

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  title,
  width,
  height,
  withoutModalHeader,
}: ModalProps) => {
  return (
    <>
      <div
        className={styles.modal}
        style={!withoutModalHeader ? { width, height } : { padding: 0, width, height }}
      >
        {!withoutModalHeader && (
          <div className={styles.modalHeader}>
            <ButtonClose onClose={onClose} />
            <h2 className={'big-title'}>{title}</h2>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};
