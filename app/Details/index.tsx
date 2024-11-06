import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Details() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Details</Text>
      <Link href={"../index"}>Go to home</Link>
      <Link href={"../Details"}>Go to det</Link>
    </SafeAreaView>
  );
}
