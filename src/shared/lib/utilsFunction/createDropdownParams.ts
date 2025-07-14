import type { TParameter } from '../../ui/Dropdown/type';

export function createDropdownParams(params: string[]): TParameter[] {
  return params.map((value, index) => {
    return {
      value,
      id: index.toString(),
      isChoosen: false,
    };
  });
}
