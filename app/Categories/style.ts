import { StyleSheet } from "react-native";
import { colors, padding, radius } from "../../style/globalsStyle";

export const categoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: padding.medium,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: padding.regular,
    paddingHorizontal: padding.Xlarge,
    marginBottom: padding.Xlarge,
  },
  header_text: {
    fontFamily: "title_font",
    fontSize: 18,
    color: colors.title_color,
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: padding.large,
    paddingHorizontal: padding.large,
    marginBottom: padding.Xlarge,
  },
  filter_text: { fontFamily: "text_regular", fontSize: 14 },
  filter_btn: {
    paddingVertical: padding.regular,
    paddingHorizontal: padding.medium,
    borderRadius: radius.medium_radius,
  },
  filter_btn_text: { fontFamily: "text_regular" },
  list: {},
  list_title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: padding.Xlarge,
    paddingVertical: padding.small,
    marginTop: -1,
  },
  list_title_text: { fontFamily: "text_regular", fontSize: 11 },
  list_categories: {
    marginHorizontal: padding.Xlarge,
    paddingVertical: padding.large,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    display: "flex",
    flexDirection: "column",
    gap: padding.small,
  },
  list_categories_label: {
    fontFamily: "text_semiBold",
    fontSize: 16,
    color: colors.title_color,
  },
  list_categories_description: {
    fontFamily: "text_regular",
    lineHeight: 21,
    color: colors.gray,
  },
});
