export const numberWithSpace = (num: number) => {
  return new Intl.NumberFormat("fr-FR").format(num);
};
