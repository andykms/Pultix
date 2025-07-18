import { Link } from 'react-router-dom';
import { ButtonUI } from '../../shared/ui/Button/Button';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <svg
        fill='var(--film-content-background)'
        height='clamp(15.625rem, 12.324rem + 14.085vw, 25rem)'
        width='clamp(15.625rem, 12.324rem + 14.085vw, 25rem)'
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 491.52 491.52'
        xmlSpace='preserve'
      >
        <g>
          <g>
            <path
              d='M419.84,225.28L419.84,225.28V102.4c0-4.58-3.045-8.61-7.45-9.85c-4.425-1.25-9.115,0.58-11.51,4.48l-81.92,133.12
			c-1.945,3.16-2.03,7.13-0.22,10.37c1.81,3.23,5.23,5.24,8.94,5.24h71.68v40.96h20.48v-40.96h30.72v-20.48H419.84z M399.36,225.28
			h-53.355l53.355-86.7V225.28z'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M143.36,225.28L143.36,225.28V102.4c0-4.58-3.045-8.61-7.45-9.85c-4.42-1.25-9.115,0.58-11.51,4.48L42.48,230.15
			c-1.945,3.16-2.03,7.13-0.22,10.37c1.81,3.23,5.23,5.24,8.94,5.24h71.68v40.96h20.48v-40.96h30.72v-20.48H143.36z M122.88,225.28
			H69.525l53.355-86.7V225.28z'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M245.76,92.16c-33.88,0-61.44,27.56-61.44,61.44v71.68c0,33.88,27.56,61.44,61.44,61.44s61.44-27.56,61.44-61.44V153.6
			C307.2,119.72,279.64,92.16,245.76,92.16z M286.72,225.28c0,22.59-18.375,40.96-40.96,40.96c-22.585,0-40.96-18.37-40.96-40.96
			V153.6c0-22.59,18.375-40.96,40.96-40.96c22.585,0,40.96,18.37,40.96,40.96V225.28z'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M491.52,409.6V0H0v409.6h153.6v61.44h-40.96v20.48h266.24v-20.48h-40.96V409.6H491.52z M20.48,20.48h450.56v317.44H20.48
			V20.48z M317.44,471.04H174.08V409.6h143.36V471.04z M20.48,389.12V358.4h450.56v30.72H20.48z'
            />
          </g>
        </g>
      </svg>
      <div>
        <span className='mega-title'>Страница не найдена </span>
      </div>
      <div>
        <span className='buttonTitle'>{`Искали где могли, но не нашли ${String.fromCodePoint(
          128532,
        )}`}</span>
      </div>
      <ButtonUI type='opacity' width='auto'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='title'>На главную</span>
        </Link>
      </ButtonUI>
    </div>
  );
};
