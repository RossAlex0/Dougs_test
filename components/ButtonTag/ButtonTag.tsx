import { Pressable, Text } from "react-native";
import { router } from "expo-router";

import Icon from "react-native-vector-icons/Ionicons";

import { CategoriesGroup } from "../../services/type/types";
import { colorToHex } from "../../services/utils/colorNameToHex";

import { buttonTagStyle } from "./style";
import { colors } from "../../style/globalsStyle";

interface ButtonTagProps {
  data: CategoriesGroup;
}

export default function ButtonTag({ data }: ButtonTagProps) {
  return (
    <>
      <Pressable
        style={[
          buttonTagStyle.button,
          {
            backgroundColor: data?.color && `${colorToHex(data.color)}`,
          },
          { borderWidth: data ? 0 : 1 },
          { borderColor: data ? "none" : colors.gray300 },
        ]}
        onPress={() => router.push("../Categories/")}
      >
        <Text
          style={[
            buttonTagStyle.text,
            {
              color: data ? data.color : colors.title_color,
            },
          ]}
        >
          {data?.label}
        </Text>
        <Icon
          name="chevron-forward-outline"
          size={16}
          color={colors.primary_color700}
        />
      </Pressable>
    </>
  );
}
