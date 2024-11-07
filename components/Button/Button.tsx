import { Pressable, Text } from "react-native";

import { buttonStyle } from "./style";

export default function Button({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={buttonStyle.pressable} onPress={onPress}>
      <Text style={buttonStyle.text}>Enregistrer</Text>
    </Pressable>
  );
}
