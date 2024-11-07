import { StyleSheet } from "react-native";
import { colors, padding } from "../../style/globalsStyle";

export const itemStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    paddingVertical: padding.large,
    marginHorizontal: padding.Xlarge,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    zIndex: 2,
    cursor: "pointer",
  },
  top_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top_box_label: {
    fontFamily: "text_semiBold",
    color: colors.title_color,
    maxWidth: "75%",
    paddingTop: 1,
  },
  top_box_price: {
    fontFamily: "text_semiBold",
    fontSize: 16,
  },
  bottom_box: {
    flex: 1,
    justifyContent: "space-between",
  },
  bottom_box_description: {
    fontFamily: "text_regular",
    fontSize: 11,
    fontStyle: "italic",
    color: colors.gray,
    maxWidth: "75%",
  },
  test: {
    height: "100%",
    justifyContent: "flex-end",
  },
});
