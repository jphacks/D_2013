import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import TitleBGImage from "src/assets/titleBg.png";
import Signin from "src/containers/Signin";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const TitleScreen = ({ navigation }) => {
  const onSigninPress = () => {
    navigation.navigate("Signin");
  };
  return (
    <>
      <View style={Styles.container}>
        <ImageBackground
          source={TitleBGImage}
          style={{ width: width, height: height }}
        >
          <Button
            bordered
            light
            style={{ width: width, height: height }}
            onPress={onSigninPress}
          ></Button>
        </ImageBackground>
      </View>
    </>
  );
};

const Title = () => {
  return (
    <>
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="TitleScreen" component={TitleScreen} />
        <Stack.Screen name="Signin" component={Signin} />
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
});

export default Title;
