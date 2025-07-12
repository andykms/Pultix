type TParameter = {
  isChoosen: boolean;
  value: string;
  id: string;
}

export interface DropdownParamProps {
  parameter: TParameter;
  onChoose: (parameter: TParameter) => void;
}