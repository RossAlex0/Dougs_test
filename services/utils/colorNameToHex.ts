export const colorToHex = (color: string): string => {
  if (color === "blue") {
    return "#D1ECFF";
  }
  if (color === "purple") {
    return "#F6F4FF";
  }
  if (color === "green") {
    return "#CFF6EA";
  }
  return "#FFFFFF";
};
