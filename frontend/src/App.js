import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UnityView from "@asmadsen/react-native-unity-view";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello JPHacks2020!</Text>
      <UnityView
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
