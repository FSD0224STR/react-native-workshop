import { ScrollView, StyleSheet, View } from "react-native";

export const BaseLayout = ({ children, style }) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <View>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
