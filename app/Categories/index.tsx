import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Categories() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Categories</Text>
      <Link href={"../"}>Go to home</Link>
      <Link href={"../Details"}>Go to det</Link>
    </SafeAreaView>
  );
}
