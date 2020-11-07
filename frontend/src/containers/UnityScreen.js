import React, { useState, useEffect, useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { useGetDoc } from "react-fireclient";
import { createStackNavigator } from "@react-navigation/stack";

import BgImage from "src/assets/bg.png";
import { AuthContext } from "src/utils/auth";
import WithHeader from "src/components/WithHeader";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const renderUnityScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [user, loading, error] = useGetDoc(`users/${currentUser.uid}`);

  useEffect(() => {
    (async () => {
      let { status } = user.data.on_Game;
      if (status == false) {
        navHome();
      }
    })();
  }, []);

  const navHome = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      {errorMsg !== null && <Text style={Styles.textStyle}>{errorMsg}</Text>}
      <View style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <WebView
            originWhitelist={["*"]}
            // ここに使用URLを流す
            source={{
              uri: `https://desolate-ocean-79020.herokuapp.com/setting_game?uid=${currentUser.uid}`,
            }}
            style={{ marginTop: 50, marginBottom: 50 }}
          />
        </ImageBackground>
      </View>
    </>
  );
};

const UnityScreen = () => {
  return (
    <>
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="renderUnityScreen" component={renderUnityScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
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

export default WithHeader(UnityScreen, "いなすりー");
