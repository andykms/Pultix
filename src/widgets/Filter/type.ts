import type { TParameter } from "../../shared/ui/Dropdown/type";

type TInput = TParameter & {
  title: string;
  placeholder: string;
}

export type TInputs = TInput[]

type TNumberInput = {
  valueMax: string;
  valueMin: string;
  placeholderMax: string;
  placeholderMin: string;
  maxLength: number,
  minLength: number,
  max: number;
  min: number;
  step: number;
  title: string;
  id: string;
}

export type TNumberInputs = TNumberInput[];

type TDropdown = {
  title: string;
  params: TParameter[];
  id: string;
}

export type TDropdowns = TDropdown[]

export type TDropdownsWithScroll = TDropdown[]

export interface FilterProps {
  width: string;
  inputs: TInputs;
  numberInputs: TNumberInputs;
  dropdowns: TDropdowns;
  dropdownsWithScroll: TDropdownsWithScroll;
  onSubmit: (filtersCount: number, inputs: TInputs, dropdowns: TDropdowns, dropdownWithScroll: TDropdownsWithScroll, numberInputs: TNumberInputs) => void;
}