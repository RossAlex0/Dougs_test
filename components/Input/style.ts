import { StyleSheet } from "react-native";
import { colors, radius } from "../../style/globalsStyle";

export const inputStyle = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    position: "relative",
  },
  input: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: radius.little_radius,
    fontFamily: "text_regular",
  },
  search: { position: "absolute", left: 8, top: 13.5 },
  euros: {
    position: "absolute",
    right: 16,
    top: 8,
    fontSize: 21,
    color: colors.primary_color700,
  },
  label: {
    position: "absolute",
    left: 16,
    top: -10,
    backgroundColor: colors.white_color,
    fontFamily: "text_regular",
    fontSize: 12,
    color: colors.primary_color700,
  },
});
