import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useMemo, useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { getOperationDetailById } from "../../services/request/get";
import {
  DetailContext,
  DetailInterface,
  StateDetail,
} from "../../services/type/types";

import { detailStyle } from "./style";
import { colors } from "../../style/globalsStyle";
import { colorToHex } from "../../services/utils/colorNameToHex";
import { putOperation } from "../../services/request/put";
import Toast from "../../components/Toast/Toast";
import { DetailCategoryContext } from "../../services/context/detailCategoryContext";

export default function Details() {
  const { id } = useLocalSearchParams();
  const { detailsValue, setDetailsValue } = useContext(
    DetailCategoryContext
  ) as DetailContext;

  const [detailData, setDetailData] = useState<DetailInterface | null>();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    setDetailsValue({
      amount: detailData?.amount || "",
      description: detailData?.description || "",
      categoryId: detailData?.categoryGrp_id || "",
    });
  }, [detailData]);

  useEffect(() => {
    if (id) {
      getOperationDetailById(parseInt(id[0]), setDetailData);
    }
  }, []);

  const handlePressToUpdate = async () => {
    if (detailsValue) {
      const response = await putOperation(parseInt(id[0]), detailsValue);
      if (response !== 400 && response !== 404) {
        setModalIsVisible(true);
        setTimeout(() => {
          setModalIsVisible(false);
        }, 12000);
      }
    }
  };

  return (
    <View style={detailStyle.container}>
      <Modal transparent={true} visible={modalIsVisible} statusBarTranslucent>
        <View
          style={{ paddingHorizontal: 24, marginTop: 44, overflow: "hidden" }}
        >
          <Toast onPress={() => setModalIsVisible(false)} />
        </View>
      </Modal>
      <View style={detailStyle.header}>
        <Pressable onPress={() => router.back()}>
          <Icon
            name="chevron-back-outline"
            size={24}
            color={colors.primary_color700}
          />
        </Pressable>
        <Text style={detailStyle.header_title}>{detailData?.label}</Text>
      </View>
      <Text style={detailStyle.date}>{detailData?.date}</Text>
      <View style={detailStyle.body}>
        <Input
          tools={{
            value: detailsValue?.amount,
            placeholder: "Insérer un nouveau montant",
            keyType: "done",
            keyboardType: "numeric",
            setOnChange: (text) =>
              detailsValue &&
              setDetailsValue({ ...detailsValue, amount: text }),
          }}
        />
        <View style={detailStyle.body_box}>
          <TextInput
            value={detailsValue?.description}
            placeholder="Veuillez inscrire une description pour l'opération"
            multiline={true}
            textAlignVertical="top"
            onChangeText={(text) =>
              detailsValue &&
              setDetailsValue({ ...detailsValue, description: text })
            }
            style={detailStyle.body_box_area}
          />
          <Text style={detailStyle.body_box_label}>Description</Text>
        </View>
        <Pressable
          style={[
            detailStyle.body_category_btn,
            {
              backgroundColor:
                detailData?.category_color &&
                `${colorToHex(detailData.category_color)}`,
            },
            { borderWidth: detailData ? 0 : 1 },
            { borderColor: detailData ? "none" : colors.gray300 },
          ]}
          onPress={() => router.push("../Categories/")}
        >
          <Text
            style={[
              detailStyle.body_category_text,
              {
                color: detailData
                  ? detailData.category_color
                  : colors.title_color,
              },
            ]}
          >
            {detailData?.category_label}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={16}
            color={colors.primary_color700}
          />
        </Pressable>
        <View style={detailStyle.button_register}>
          <Button onPress={handlePressToUpdate} />
        </View>
      </View>
    </View>
  );
}