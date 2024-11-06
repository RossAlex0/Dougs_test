import { Pressable, Text } from "react-native";

import { buttonStyle } from "./style";

export default function Button() {
  return (
    <Pressable style={buttonStyle.pressable}>
      <Text style={buttonStyle.text}>Enregistrer</Text>
    </Pressable>
  );
}
