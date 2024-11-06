import { StyleSheet } from "react-native";
import { colors, padding } from "../../style/globalsStyle";

export const itemStyle = StyleSheet.create({
  container: {
    height: 101,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingVertical: padding.large,
  },
  top_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top_box_label: {
    fontFamily: "text_semiBold",
    color: colors.title_color,
    maxWidth: "70%",
    paddingTop: 1,
  },
  top_box_price: {
    fontFamily: "text_semiBold",
    fontSize: 16,
  },
  bottom_box: { flex: 1, justifyContent: "space-between" },
  bottom_box_description: {
    fontFamily: "text_regular",
    fontSize: 11,
    fontStyle: "italic",
    color: colors.gray,
    maxWidth: "53%",
  },
});
