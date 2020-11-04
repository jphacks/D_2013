import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import WithHeader from "src/components/WithHeader";

const UnityScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Text>Hello JPHacks2020!</Text>
        <WebView
          originWhitelist={["*"]}
          // ここに使用URLを流す
          source={require("http://google.com")}
          style={{ marginTop: 50, marginBottom: 50 }}
        />
        <Text>Hello JPHacks2020</Text>
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

export default WithHeader(UnityScreen, "Unity");
