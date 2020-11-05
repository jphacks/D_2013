import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import WithHeader from "src/components/WithHeader";
import TitleBGImage from "src/assets/titleBg.png";
import Signin from "src/containers/Signin";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const TitleScreen = ({ navigation }) => {
  const onSigninPress = () => { navigation.navigate("Signin") }
  return (
    <>
      <View style={Styles.container}>
        <ImageBackground source={TitleBGImage} style={Styles.image}>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={onSigninPress}
          >
            <Text style={{ color: "white" }}>Tap to This Button</Text>
          </Button>
        </ImageBackground>
      </View>
    </>
  );
}

const Title = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Title;
