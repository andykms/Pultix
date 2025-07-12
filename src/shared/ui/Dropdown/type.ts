export type TParameter = {
  value: string;
  id: string;
  isChoosen: boolean;
};

export interface DropdownProps {
  title: string;
  params: TParameter[];
  onChoose: (param: TParameter) => void;
  isScrollable?: boolean;
}