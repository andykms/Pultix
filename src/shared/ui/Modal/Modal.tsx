import type { ModalProps } from "./type";
import styles from "./Modal.module.scss";
import { ButtonUI } from "../Button/Button";

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  title,
}: ModalProps) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <ButtonUI type="tertiary" onClick={onClose} width="50px">
            <svg
              width="50px"
              height="50px"
              viewBox="0 -0.5 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>close [#1511]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="var(--main-text-color)"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-419.000000, -240.000000)"
                  fill="var(--main-text-color)"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon
                      id="close-[#1511]"
                      points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </ButtonUI>
          <h2 className={'big-title'}>{title}</h2>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};
