import { StyleSheet } from "react-native";
import { colors, padding, radius } from "../../style/globalsStyle";

export const toastStyle = StyleSheet.create({
  container: {
    height: 44,
    width: "100%",
    backgroundColor: colors.green500,
    borderRadius: radius.medium_radius,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: padding.large,
    paddingVertical: padding.small,
  },
  container_text: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: padding.medium,
  },
  valid: {},
  text: {
    color: colors.white_color,
    fontFamily: "title_font",
    marginBottom: -2,
  },
  close: {},
});
