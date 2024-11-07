import { StyleSheet } from "react-native";
import { colors, padding, radius } from "../../style/globalsStyle";

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_header: {
    paddingHorizontal: padding.Xlarge,
  },
  header_stats: {
    minHeight: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white_color,
    marginVertical: padding.large,
    padding: padding.large,
    borderRadius: radius.medium_radius,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  stats_box: {
    display: "flex",
    flexDirection: "column",
  },
  stats_nb: { fontFamily: "title_font", fontSize: 16 },
  stats_label: {
    fontFamily: "text_regular",
    fontSize: 11,
    color: colors.neutralGray,
    alignSelf: "flex-end",
  },
  container_body: { marginTop: padding.large },
  body_date: {
    height: 25,
    width: "100%",
    backgroundColor: colors.lightGray,
    paddingHorizontal: padding.large,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
