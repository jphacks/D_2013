import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import WithHeader from "src/components/WithHeader";
import BgImage from "src/assets/bg.png";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const SettingUserScreen = ({ navigation }) => {
  const onHomePress = () => { navigation.navigate("Home") }
  return (
    <>
      <View style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={onHomePress}
          >
            <Text style={{ color: "white" }}>Tap to This Button</Text>
          </Button>
        </ImageBackground>
      </View>
    </>
  );
}

const SettingUser = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
        <Stack.Navigator {...StackNavigatorProps}>
          <Stack.Screen name="SettingUserScreen" component={SettingUserScreen} />
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

export default SettingUser;