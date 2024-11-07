import { View, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";

import Tag from "../Tag/Tag";

import { CategoriesGroup, Operation } from "../../services/type/types";
import { getCategoriesGroupsByOperation } from "../../services/request/get";

import { itemStyle } from "./style";
import { colors } from "../../style/globalsStyle";
import { router } from "expo-router";

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
    <Pressable
      onPress={() => router.push(`../Details/${operation.id}`)}
      style={[
        itemStyle.container,
        { height: operation.description !== "" ? 101 : 81 },
      ]}
    >
      <View style={itemStyle.top_box}>
        <Text
          style={itemStyle.top_box_label}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {operation.label}
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
          {operation.amount < 0
            ? `${Math.abs(operation.amount)} €`
            : `+ ${operation.amount} €`}
        </Text>
      </View>
      <View style={itemStyle.bottom_box}>
        <Text
          style={[
            itemStyle.bottom_box_description,
            { display: operation.description === "" ? "none" : "flex" },
          ]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {operation.description}
        </Text>
        <View style={operation.description === "" && itemStyle.test}>
          <Tag categoryGroup={categoryGroupData} />
        </View>
      </View>
    </Pressable>
  );
}
