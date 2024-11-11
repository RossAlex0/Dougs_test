// Format number with spaces as thousand separators
export const numberWithSpace = (num: number) => {
  return new Intl.NumberFormat("fr-FR").format(num);
};
