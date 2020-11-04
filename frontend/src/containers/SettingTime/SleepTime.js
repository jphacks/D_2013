import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SleepTime = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>睡眠時間設定 Screen</Text>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});

export default SleepTime;