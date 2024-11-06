import { View, Text, Pressable } from "react-native";

import { CategoriesGroup } from "../../services/type/types";
import { colorToHex } from "../../services/utils/colorNameToHex";

import { tagStyle } from "./style";
import { colors } from "../../style/globalsStyle";

interface CategoryProps {
  categoryGroup?: CategoriesGroup;
}

export default function Tag({ categoryGroup }: CategoryProps) {
  return (
    <Pressable
      style={[
        tagStyle.container_tag,
        {
          backgroundColor:
            categoryGroup?.color && `${colorToHex(categoryGroup.color)}`,
        },
        { borderWidth: categoryGroup ? 0 : 1 },
        { borderColor: categoryGroup ? "none" : colors.gray300 },
      ]}
    >
      <Text
        style={[
          tagStyle.text,
          { color: categoryGroup ? categoryGroup.color : colors.title_color },
        ]}
      >
        {categoryGroup ? categoryGroup.label : "Non catégorisé"}
      </Text>
    </Pressable>
  );
}
