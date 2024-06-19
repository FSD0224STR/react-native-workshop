import { StyleSheet, TouchableOpacity } from "react-native";

export const Button = ({ onPress, children, color = "blue" }) => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor: color }]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
  },
});
