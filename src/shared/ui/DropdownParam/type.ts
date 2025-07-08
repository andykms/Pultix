type TParameter = {
  isChoosen: boolean;
  value: string;
  id: number;
}

export interface DropdownParamProps {
  parameter: TParameter;
  onChoose: (parameter: TParameter) => void;
}