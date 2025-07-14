import styles from './Dropdown.module.scss';
import type { DropdownParamProps } from './type';
import { ButtonUI } from '../Button/Button';

export const DropdownParam: React.FC<DropdownParamProps> = ({
  parameter,
  onChoose,
}: DropdownParamProps) => {
  return (
    <ButtonUI type='tertiary' onClick={() => onChoose(parameter)} width='80%'>
      <div className={styles.dropdownOption}>
        <div
          className={styles.dropdownIconContainer}
          style={{
            backgroundColor: parameter.isChoosen
              ? 'var(--widgets-color-hover)'
              : 'var(--main-text-color)',
          }}
        >
          <svg
            fill={parameter.isChoosen ? 'black' : 'var(--main-text-color)'}
            height='20px'
            width='20px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 511.936 511.936'
            xmlSpace='preserve'
          >
            <g>
              <g>
                <polygon points='500.288,61.904 155.888,427.344 11.024,289.376 0,300.96 156.512,450.032 511.936,72.88 		' />
              </g>
            </g>
          </svg>
        </div>
        <span className={'textHovered'}>{parameter.value}</span>
      </div>
    </ButtonUI>
  );
};

/*
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 511.936 511.936" xml:space="preserve">
<g>
	<g>
		<polygon points="500.288,61.904 155.888,427.344 11.024,289.376 0,300.96 156.512,450.032 511.936,72.88 		"/>
	</g>
</g>
</svg>
*/
