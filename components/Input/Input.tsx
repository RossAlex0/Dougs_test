import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../../style/globalsStyle";
import { inputStyle } from "./style";

export default function Input({ tools }: InputInterface) {
  return (
    <View style={inputStyle.container}>
      <TextInput
        value={tools.value ? `${tools.value}` : ""}
        placeholder={tools.placeholder}
        placeholderTextColor={colors.gray325}
        returnKeyType={tools.keyType}
        keyboardType={tools.keyboardType}
        // onFocus={() => tools.setIsFocuse && tools.setIsFocuse(true)}
        // onSubmitEditing={() => tools.setIsFocuse && tools.setIsFocuse(false)}
        // onChangeText={tools.setOnChange}
        style={[
          inputStyle.input,
          { paddingLeft: tools.keyboardType === "default" ? 32 : 16 },
        ]}
      />
      {tools.keyboardType === "default" ? (
        <Icon
          name="search"
          size={18}
          color={colors.primary_color700}
          style={inputStyle.search}
        />
      ) : (
        <>
          <Text style={inputStyle.label}>Montant</Text>
          <Icon
            name="logo-euro"
            size={18}
            color={colors.primary_color700}
            style={inputStyle.euros}
          />
        </>
      )}
    </View>
  );
}

interface InputInterface {
  tools: {
    value?: string | number | undefined;
    placeholder: string;
    keyType: "done" | "search";
    keyboardType: "numeric" | "default";
    setIsFocuse?: (value: boolean) => void;
    setOnChange?: (value: any) => void;
  };
}
