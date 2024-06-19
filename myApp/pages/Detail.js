import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/atom/Button";

export default function Detail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button onPress={() => navigation.navigate("Home")}>
        <Text>{"<-"} Go back</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
