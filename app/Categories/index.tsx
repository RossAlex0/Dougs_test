import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { DetailCategoryContext } from "../../services/context/detailCategoryContext";
import { DetailContext, StateCategories } from "../../services/type/types";
import { getAllCategories } from "../../services/request/get";

import { categoryStyle } from "./style";
import { colors } from "../../style/globalsStyle";
import { router } from "expo-router";
import { colorToHex } from "../../services/utils/colorNameToHex";

export default function Categories() {
  const { detailsValue, setDetailsValue, setGroupId } = useContext(
    DetailCategoryContext
  ) as DetailContext;
  console.info(detailsValue);
  const [categoriesData, setCategoriesData] = useState<
    StateCategories[] | null
  >();
  const [filterSelect, setFilterSelect] = useState("Groupes");

  const filterOptions = ["Groupes", "A-Z", "Z-A"] as const;

  useEffect(() => {
    getAllCategories(setCategoriesData);
  }, []);

  const handleClickFilter = (option: "Groupes" | "A-Z" | "Z-A") => {
    setFilterSelect(option);
    if (option === "Groupes") {
      getAllCategories(setCategoriesData);
    } else {
      getAllCategories(setCategoriesData, option);
    }
  };

  const handleClickCategory = (value: number) => {
    if (detailsValue) {
      setDetailsValue({
        ...detailsValue,
        categoryId: value,
      });
    }
    setGroupId(value);
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={categoryStyle.header}>
        <Pressable onPress={() => router.back()}>
          <Icon
            name="chevron-back-outline"
            size={32}
            color={colors.primary_color700}
          />
        </Pressable>
        <Text style={categoryStyle.header_text}>Catégories</Text>
      </View>
      <View style={categoryStyle.filter}>
        <Text style={categoryStyle.filter_text}>Trier par</Text>
        {filterOptions.map((option) => (
          <Pressable
            key={option}
            style={[
              categoryStyle.filter_btn,
              {
                backgroundColor:
                  filterSelect === option ? "#11ABEC" : "#F3F5F8",
              },
            ]}
            onPress={() => handleClickFilter(option)}
          >
            <Text
              style={[
                categoryStyle.filter_btn_text,
                { color: filterSelect === option ? "#FFFFFF" : "#686E75" },
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
      <ScrollView>
        {categoriesData?.map((catGroup) => (
          <Pressable
            onPress={() => handleClickCategory(catGroup.categories[0].groupId)}
          >
            <View
              style={[
                categoryStyle.list_title,
                { backgroundColor: colorToHex(catGroup.color) },
              ]}
            >
              <Text
                style={[
                  categoryStyle.list_title_text,
                  { color: catGroup.color },
                ]}
              >
                {catGroup.name}
              </Text>
            </View>
            {catGroup.categories.map((categories) => (
              <View key={categories.id} style={categoryStyle.list_categories}>
                <Text style={categoryStyle.list_categories_label}>
                  {categories.label}
                </Text>
                <Text style={categoryStyle.list_categories_description}>
                  {categories.description}
                </Text>
              </View>
            ))}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
