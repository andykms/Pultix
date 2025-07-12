import styles from "./Filter.module.scss";
import type { FilterProps } from "./type";
import { NumberInput } from "../../shared/ui/NumberInput/NumberInput";
import { Dropdown } from "../../shared/ui/Dropdown/Dropdown";
import { InputUI } from "../../shared/ui/Input/Input";
import { useState } from "react";
import { getValidNumber } from "../../shared/lib/utilsFunction/getValidNumber";
import type { TParameter } from "../../shared/ui/Dropdown/type";
import { ButtonUI } from "../../shared/ui/Button/Button";

export const Filter: React.FC<FilterProps> = (props: FilterProps) => {
  const {
    inputs,
    dropdowns,
    dropdownsWithScroll,
    numberInputs,
    width,
    onSubmit,
  } = props;

  const [filtersCount, setFiltersCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [inputsValues, setInputsValues] = useState(inputs);
  const [dropdownsValues, setDropdownsValues] = useState(dropdowns);
  const [dropdownsWithScrollValues, setDropdownsWithScrollValues] =
    useState(dropdownsWithScroll);
  const [numberInputsValues, setNumberInputsValues] = useState(numberInputs);

  const onChangeInput = (id: string, value: string) => {
    setInputsValues(
      inputsValues.map((item) => {
        if (item.id === id) {
          if (value.length > 0) setFiltersCount(filtersCount + 1);
          else setFiltersCount(filtersCount - 1);
          return { ...item, value };
        }
        return item;
      })
    );
  };

  const onChangeNumberInput = (
    id: string,
    type: "min" | "max",
    value: string
  ) => {
    setNumberInputsValues(
      numberInputsValues.map((item) => {
      

        if (item.id === id) {
          const validValue = getValidNumber(value, 3, item.max, item.min);
          if (type === "min") {
            if(item.valueMin === '0' && validValue !== "0") setFiltersCount(filtersCount + 1);
            else if(item.valueMin !== '0' && validValue === "0") setFiltersCount(filtersCount - 1);
            return {
              ...item,
              valueMin: validValue,
            };
          } else {
            if(item.valueMax === '0' && validValue !== "0") setFiltersCount(filtersCount + 1);
            else if(item.valueMax !== '0' && validValue === "0") setFiltersCount(filtersCount - 1);
            return {
              ...item,
              valueMax: validValue,
            };
          }
        }
        return item;
      })
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

  const onChangeDropdownWithScroll = (
    dropdownId: string,
    choosenParam: TParameter
  ) => {
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
      <div
        className={styles.filterContainer}
        style={{
          blockSize: isOpen ? "auto" : "50px",
        }}
      >
        <ButtonUI
          type={filtersCount > 0 ? "primary" : "secondary"}
          width={filtersCount > 0 ? "100px" : "50px"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            fill="var(--main-text-color)"
            width="30px"
            height="30px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 .011 741.97 984.808v673.566l502.665 251.332V984.82l675.332-896.544-88.154-66.308-697.508 925.891v783.345L852.301 1590.2V947.858L221.322 110.341h1262.289V.011z"
              fill-rule="evenodd"
            />
          </svg>
          {filtersCount > 0 && (
            <span className={"buttonTitle"}>{`(${filtersCount})`}</span>
          )}
        </ButtonUI>
        {isOpen && (
          <div className={styles.filter} style={{ width }}>
            <h2 className={"title"}>{`Фильтры${
              filtersCount > 0 ? `: ${filtersCount}` : ""
            }`}</h2>
            {inputsValues.map((input) => (
              <InputUI
                key={input.id}
                {...input}
                width="90%"
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
                onChangeMin={(value: string) =>
                  onChangeNumberInput(numberInput.id, "min", value)
                }
                onChangeMax={(value: string) =>
                  onChangeNumberInput(numberInput.id, "max", value)
                }
              />
            ))}
            {dropdownsValues.map((dropdown) => (
              <Dropdown
                key={dropdown.id}
                {...dropdown}
                onChoose={(param: TParameter) =>
                  onChangeDropdown(dropdown.id, param)
                }
              />
            ))}
            {dropdownsWithScrollValues.map((dropdown) => (
              <Dropdown
                isScrollable={true}
                key={dropdown.id}
                {...dropdown}
                onChoose={(param: TParameter) =>
                  onChangeDropdownWithScroll(dropdown.id, param)
                }
              />
            ))}
            <ButtonUI
              type="primary"
              width="90%"
              onClick={() =>
                onSubmit(
                  filtersCount,
                  inputsValues,
                  dropdownsValues,
                  dropdownsWithScrollValues,
                  numberInputsValues
                )
              }
              style={{ justifySelf: "flex-end" }}
            >
              <span className={"buttonTitle"}>Применить фильтры</span>
            </ButtonUI>
          </div>
        )}
      </div>
    </>
  );
};
