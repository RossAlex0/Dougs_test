import { StyleSheet } from "react-native";
import { padding, radius } from "../../style/globalsStyle";

export const tagStyle = StyleSheet.create({
  container_tag: {
    alignSelf: "flex-end",
    borderRadius: radius.little_radius,
  },
  text: {
    fontFamily: "text_regular",
    fontSize: 11,
    fontStyle: "italic",
    paddingVertical: padding.small,
    paddingHorizontal: padding.regular,
  },
});
