import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import WithHeader from "src/components/WithHeader";
import BgImage from "src/assets/bg.png";
import UnityScreen from "src/containers/UnityScreen";
import SettingScreen from "src/containers/SettingScreen";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const HomeScreen = ({ navigation }) => {
  const onUnityPress = () => {
    navigation.navigate("UnityScreen");
  };
  const onSettingTimePress = () => {
    navigation.navigate("SettingScreen");
  };
  return (
    <>
      <View style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={onUnityPress}
          >
            <Text style={{ color: "white" }}>ゲームを選択</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={onSettingTimePress}
          >
            <Text style={{ color: "white" }}>生活習慣を設定</Text>
          </Button>
        </ImageBackground>
      </View>
    </>
  );
};

const Home = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UnityScreen" component={UnityScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
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

export default Home;
