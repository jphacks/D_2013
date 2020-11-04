import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import { SleepTime, GetUpTime, PartySetting } from "src/containers/SettingTime";

import WithHeader from "src/components/WithHeader";
import { MAIN_COLOR } from "src/utils/color";
import BgImage from "src/assets/bg.png";

const Stack = createStackNavigator();

const SettingBody = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <Text style={{ color: "#888", fontSize: 18 }}>セッティング</Text>
          {/* 睡眠時間 */}
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => navigation.navigate("SleepTime")}
          >
            <Text style={{ color: "white" }}>睡眠時間設定</Text>
          </Button>
          {/* 起床時間 */}
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => navigation.navigate("GetUpTime")}
          >
            <Text style={{ color: "white" }}>起床時間設定</Text>
          </Button>
          {/* 派閥設定 */}
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => navigation.navigate("PartySetting")}
          >
            <Text style={{ color: "white" }}>派閥設定</Text>
          </Button>
        </ImageBackground>
      </View>
    </>
  );
};

const SettingScreen = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Setting"
          component={SettingBody}
          options={{
            headerStyle: {
              backgroundColor: MAIN_COLOR,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="SleepTime" component={SleepTime} />
        <Stack.Screen name="GetUpTime" component={GetUpTime} />
        <Stack.Screen name="PartySetting" component={PartySetting} />
      </Stack.Navigator>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDAD",
    // padding: 10,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default WithHeader(SettingScreen, "設定");
