export const formatComma = (value?: number): string => {
  if (!value) {
    return '0';
  }

  return new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(value);
};
