import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import BgImage from "src/assets/bg.png";

import WithHeader from "src/components/WithHeader";

const backgroundImage = BgImage;

const UnityScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <ImageBackground source={backgroundImage} style={Styles.image}>
          <Text>Hello JPHacks2020!</Text>
          <WebView
            originWhitelist={["*"]}
            // ここに使用URLを流す
            source={{ uri: "https://google.com" }}
            style={{ marginTop: 50, marginBottom: 50 }}
          />
          <Text>Hello JPHacks2020</Text>
        </ImageBackground>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDAD",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default WithHeader(UnityScreen, "Unity");
