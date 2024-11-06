import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../../style/globalsStyle";
import { toastStyle } from "./style";

export default function Toast() {
  return (
    <View style={toastStyle.container}>
      <View style={toastStyle.container_text}>
        <Icon
          name="checkmark-circle-outline"
          size={18}
          color={colors.white_color}
        />
        <Text style={toastStyle.text}>Modification enregistrée</Text>
      </View>
      <Pressable>
        <Icon name="close-outline" size={16} color={colors.white_color} />
      </Pressable>
    </View>
  );
}
