// Format number with spaces as thousand separators(1000 => 1 000)
export const numberWithSpace = (num: number) => {
  return new Intl.NumberFormat("fr-FR").format(num);
};
