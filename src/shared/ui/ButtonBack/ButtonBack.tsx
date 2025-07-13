import { ButtonUI } from "../Button/Button";

export const ButtonBack = (props: { onClose: () => void }) => (
  <ButtonUI type="tertiary" onClick={props.onClose} width="clamp(2.5rem, 1.73rem + 3.286vw, 4.688rem)">
    <svg
      width="clamp(2.5rem, 1.73rem + 3.286vw, 4.688rem)"
      height="clamp(2.5rem, 1.73rem + 3.286vw, 4.688rem)"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      style={{zIndex:9, flexShrink: 1}}
    >
      <path
        fill="var(--main-text-color)"
        d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"
      />
      <path
        fill="var(--main-text-color)"
        d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
      />
    </svg>
  </ButtonUI>
);
