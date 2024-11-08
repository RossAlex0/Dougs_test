import { StyleSheet } from "react-native";
import { colors, radius, padding } from "../../style/globalsStyle";

export const buttonTagStyle = StyleSheet.create({
  button: {
    height: 41,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: padding.large,
    borderRadius: radius.medium_radius,
  },
  text: { fontFamily: "title_font", marginBottom: -2 },
});
