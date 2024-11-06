import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Home</Text>
      <Link href={"/Categories"}>Go to cat</Link>
      <Link href={"/Details"}>Go to det</Link>
    </SafeAreaView>
  );
}
