import { ButtonUI } from '../Button/Button';

export const ButtonClose = (props: { onClose: () => void }) => (
  <ButtonUI type='tertiary' onClick={props.onClose} width='50px'>
    <svg
      width='clamp(0.938rem, 0.167rem + 3.286vw, 3.125rem)'
      height='clamp(0.938rem, 0.167rem + 3.286vw, 3.125rem)'
      viewBox='0 -0.5 21 21'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      style={{ zIndex: 9 }}
    >
      <title>close [#1511]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id='Page-1'
        stroke='none'
        stroke-width='1'
        fill='var(--main-text-color)'
        fill-rule='evenodd'
      >
        <g
          id='Dribbble-Light-Preview'
          transform='translate(-419.000000, -240.000000)'
          fill='var(--main-text-color)'
        >
          <g id='icons' transform='translate(56.000000, 160.000000)'>
            <polygon
              id='close-[#1511]'
              points='375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446'
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  </ButtonUI>
);
