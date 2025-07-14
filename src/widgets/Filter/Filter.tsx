import styles from './Filter.module.scss';
import type { FilterProps } from './type';
import { NumberInput } from '../../shared/ui/NumberInput/NumberInput';
import { Dropdown } from '../../shared/ui/Dropdown/Dropdown';
import { InputUI } from '../../shared/ui/Input/Input';
import { useEffect, useState } from 'react';
import { getValidNumber } from '../../shared/lib/utilsFunction/getValidNumber';
import type { TParameter } from '../../shared/ui/Dropdown/type';
import { ButtonUI } from '../../shared/ui/Button/Button';

export const Filter: React.FC<FilterProps> = (props: FilterProps) => {
  const { inputs, dropdowns, dropdownsWithScroll, numberInputs, width, onSubmit } = props;

  const [filtersCount, setFiltersCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [inputsValues, setInputsValues] = useState(
    inputs.map((item) => {
      return { ...item, error: false };
    }),
  );
  const [dropdownsValues, setDropdownsValues] = useState(
    dropdowns.map((item) => {
      return { ...item, error: false };
    }),
  );
  const [dropdownsWithScrollValues, setDropdownsWithScrollValues] = useState(
    dropdownsWithScroll.map((item) => {
      return { ...item, error: false };
    }),
  );
  const [numberInputsValues, setNumberInputsValues] = useState(
    numberInputs.map((item) => {
      return { ...item, error: false };
    }),
  );

  useEffect(() => {
    if (numberInputsValues.some((item) => item.error)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [numberInputsValues]);

  const onChangeInput = (id: string, value: string) => {
    setInputsValues(
      inputsValues.map((item) => {
        if (item.id === id) {
          if (value.length > 0) setFiltersCount(filtersCount + 1);
          else setFiltersCount(filtersCount - 1);
          return { ...item, value };
        }
        return item;
      }),
    );
  };

  const onChangeNumberInput = (id: string, type: 'min' | 'max', value: string) => {
    setNumberInputsValues(
      numberInputsValues.map((item) => {
        if (item.id === id) {
          let newItem;
          if (type === 'min') {
            if (item.valueMin === '0' && value !== '0') setFiltersCount(filtersCount + 1);
            else if (item.valueMin !== '0' && value === '0') setFiltersCount(filtersCount - 1);
            newItem = {
              ...item,
              valueMin: value,
            };
          } else {
            if (item.valueMax === '0' && value !== '0') setFiltersCount(filtersCount + 1);
            else if (item.valueMax !== '0' && value === '0') setFiltersCount(filtersCount - 1);
            newItem = {
              ...item,
              valueMax: value,
            };
          }
          if (newItem.valueMax === newItem.valueMin && newItem.valueMin === '') {
            newItem.error = false;
            return newItem;
          }
          const parsedMin = Number.parseFloat(newItem.valueMin);
          const parsedMax = Number.parseFloat(newItem.valueMax);
          const isInRangeMin = parsedMin >= item.min && parsedMin <= item.max;
          const isInRangeMax = parsedMax >= item.min && parsedMax <= item.max;
          if (isNaN(parsedMin) || isNaN(parsedMax) || !isInRangeMin || !isInRangeMax) {
            newItem.error = true;
          } else {
            newItem.error = false;
          }

          return newItem;
        }
        return item;
      }),
    );
  };

  const onChangeDropdown = (dropdownId: string, choosenParam: TParameter) => {
    const newValue = dropdownsValues.map((item) => {
      if (item.id === dropdownId) {
        const newParams = item.params.map((param) => {
          if (param.id === choosenParam.id) {
            if (!param.isChoosen) setFiltersCount(filtersCount + 1);
            else setFiltersCount(filtersCount - 1);
            return { ...param, isChoosen: !param.isChoosen };
          }
          return param;
        });
        return { ...item, params: newParams };
      }
      return item;
    });
    setDropdownsValues(newValue);
  };

  const onChangeDropdownWithScroll = (dropdownId: string, choosenParam: TParameter) => {
    const newValue = dropdownsWithScrollValues.map((item) => {
      if (item.id === dropdownId) {
        const newParams = item.params.map((param) => {
          if (param.id === choosenParam.id) {
            if (!param.isChoosen) setFiltersCount(filtersCount + 1);
            else setFiltersCount(filtersCount - 1);
            return { ...param, isChoosen: !param.isChoosen };
          }
          return param;
        });
        return { ...item, params: newParams };
      }
      return item;
    });
    setDropdownsWithScrollValues(newValue);
  };
  return (
    <>
      <div className={styles.filterContainer}>
        <ButtonUI
          type={filtersCount > 0 ? 'primary' : 'secondary'}
          width='auto'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            fill='var(--main-text-color)'
            width='30px'
            height='30px'
            viewBox='0 0 1920 1920'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m0 .011 741.97 984.808v673.566l502.665 251.332V984.82l675.332-896.544-88.154-66.308-697.508 925.891v783.345L852.301 1590.2V947.858L221.322 110.341h1262.289V.011z'
              fill-rule='evenodd'
            />
          </svg>
          {filtersCount > 0 && <span className={'buttonTitle'}>{`(${filtersCount})`}</span>}
        </ButtonUI>

        {isOpen && (
          <div className={styles.filter} style={{ width }}>
            <h2 className={'title'}>{`Фильтры${filtersCount > 0 ? `: ${filtersCount}` : ''}`}</h2>
            {inputsValues.map((input) => (
              <InputUI
                key={input.id}
                {...input}
                width='90%'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeInput(input.id, e.target.value)
                }
              />
            ))}
            {numberInputsValues.map((numberInput) => (
              <NumberInput
                titleMin={numberInput.placeholderMin}
                titleMax={numberInput.placeholderMax}
                key={numberInput.id}
                {...numberInput}
                onChangeMin={(value: string) => onChangeNumberInput(numberInput.id, 'min', value)}
                onChangeMax={(value: string) => onChangeNumberInput(numberInput.id, 'max', value)}
              />
            ))}
            {dropdownsValues.map((dropdown) => (
              <Dropdown
                key={dropdown.id}
                {...dropdown}
                onChoose={(param: TParameter) => onChangeDropdown(dropdown.id, param)}
              />
            ))}
            {dropdownsWithScrollValues.map((dropdown) => (
              <Dropdown
                isScrollable={true}
                key={dropdown.id}
                {...dropdown}
                onChoose={(param: TParameter) => onChangeDropdownWithScroll(dropdown.id, param)}
              />
            ))}
            <ButtonUI
              disabled={isDisabled}
              type='primary'
              width='90%'
              onClick={() =>
                onSubmit(
                  filtersCount,
                  inputsValues,
                  dropdownsValues,
                  dropdownsWithScrollValues,
                  numberInputsValues,
                )
              }
              style={{ justifySelf: 'flex-end' }}
            >
              <span className={'buttonTitle'}>Применить</span>
            </ButtonUI>
          </div>
        )}
      </div>
    </>
  );
};
