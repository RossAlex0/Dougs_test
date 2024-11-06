import { StyleSheet } from "react-native";
import { padding } from "../../style/globalsStyle";

export const tagStyle = StyleSheet.create({
  container_tag: {
    alignSelf: "flex-end",
  },
  text: {
    fontFamily: "text_regular",
    fontStyle: "italic",
    paddingVertical: padding.small,
    paddingHorizontal: padding.regular,
  },
});
