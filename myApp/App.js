import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BaseLayout } from "./components/Layouts/Base";

const MyComponent = () => {
  return (
    <BaseLayout style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Botón presionado")}
      >
        <Text style={styles.buttonText}>Presióname</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonYellow]}
        onPress={() => Alert.alert("Botón presionado")}
      >
        <Text style={[styles.buttonText, styles.buttonTextYellow]}>
          Presióname
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Botón presionado")}
      >
        <Text style={styles.buttonText}>Presióname</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonYellow]}
        onPress={() => Alert.alert("Botón presionado")}
      >
        <Text style={[styles.buttonText, styles.buttonTextYellow]}>
          Presióname
        </Text>
      </TouchableOpacity>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cacaca",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "black",
    padding: 100,
  },
  buttonYellow: {
    backgroundColor: "yellow",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  buttonTextYellow: {
    color: "black",
  },
});

export default MyComponent;
