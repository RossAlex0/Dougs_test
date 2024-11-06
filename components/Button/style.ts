import { StyleSheet } from "react-native";
import { colors, radius } from "../../style/globalsStyle";

export const buttonStyle = StyleSheet.create({
  pressable: {
    height: 45,
    width: "100%",
    backgroundColor: colors.primary_color,
    borderRadius: radius.medium_radius,
  },
  text: {
    fontFamily: "text_semiBold",
    color: colors.white_color,
    margin: "auto",
  },
});
