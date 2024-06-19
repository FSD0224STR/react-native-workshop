import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/atom/Button";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        <View style={{ flexDirection: "row" }}>
          <Text>😲</Text>
          <Text>Navigate to detail</Text>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});
