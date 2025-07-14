export function getValidNumber(
  value: string,
  maxLength: number,
  maxValue: number,
  minValue: number,
) {
  if (value === '') {
    return '';
  }
  const newValue = value.slice(0, maxLength);
  if (maxValue !== undefined && parseInt(newValue) > maxValue) {
    return maxValue.toString();
  } else if (minValue !== undefined && parseInt(newValue) < minValue) {
    return minValue.toString();
  }
  return newValue;
}
