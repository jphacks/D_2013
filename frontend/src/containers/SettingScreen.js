import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "react-navigation-stack";

import SleepTime from "src/containers/SettingTime/SleepTime";
import GetUpTime from "src/containers/SettingTime/GetUpTime";
import PartySetting from "src/containers/SettingTime/PartySetting";

const Stack = createStackNavigator();

const SettingBody = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
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
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});

export default SettingScreen;
