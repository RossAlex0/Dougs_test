import { StyleSheet } from "react-native";
import { colors, padding, radius } from "../../style/globalsStyle";

export const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.Xlarge,
    paddingTop: padding.medium,
    display: "flex",
    flexDirection: "column",
    gap: padding.Xlarge,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: padding.regular,
  },
  header_title: {
    fontFamily: "title_font",
    color: colors.title_color,
    fontSize: 18,
  },
  date: { fontFamily: "text_regular", color: colors.primary_color700 },
  body: { flex: 1, gap: padding.Xlarge },
  body_box: {
    height: "auto",
    minHeight: 108,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: radius.little_radius,
    paddingHorizontal: padding.large,
    paddingVertical: padding.medium,
    position: "relative",
  },
  body_box_area: {},
  body_box_label: {
    position: "absolute",
    left: 16,
    top: -11,
    backgroundColor: colors.white_color,
    fontFamily: "text_regular",
    fontSize: 12,
    color: colors.primary_color700,
  },
  button_register: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});
