import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import Tag from "../Tag/Tag";

import { CategoriesGroup, Operation } from "../../services/type/types";
import { getCategoriesGroupsByOperation } from "../../services/request/get";

import { itemStyle } from "./style";
import { colors } from "../../style/globalsStyle";

interface OperationProps {
  operation: Operation;
}

export default function Item({ operation }: OperationProps) {
  const [categoryGroupData, setCategoryData] = useState<
    CategoriesGroup | undefined
  >();

  useEffect(() => {
    if (operation.categoryId) {
      getCategoriesGroupsByOperation(operation.categoryId, setCategoryData);
    }
  }, []);

  return (
    <View style={itemStyle.container}>
      <View style={itemStyle.top_box}>
        <Text
          style={itemStyle.top_box_label}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {operation.label}{" "}
        </Text>
        <Text
          style={[
            itemStyle.top_box_price,
            {
              color:
                operation.amount <= 0
                  ? colors.title_color
                  : colors.primary_color,
            },
          ]}
        >
          {operation.amount} €
        </Text>
      </View>
      <View style={itemStyle.bottom_box}>
        <Text
          style={itemStyle.bottom_box_description}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {operation.description}
        </Text>
        <Tag categoryGroup={categoryGroupData} />
      </View>
    </View>
  );
}
