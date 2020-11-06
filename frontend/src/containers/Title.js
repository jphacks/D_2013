import React, { useState, useContext } from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

import WithHeader from "src/components/WithHeader";
import TitleBGImage from "src/assets/titleBg.png";
import Signin from "src/containers/Signin";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const { width, height, scale } = Dimensions.get('window');

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
        <ImageBackground source={TitleBGImage} style={{width: width, height: height}}>
          <Button bordered light
            style={{width: width, height: height}}
            // full
            // rounded
            // success
            onPress={onSigninPress}
          >
          </Button>
        </ImageBackground>
      </View>
    </>
  );
};

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
});

export default Title;
