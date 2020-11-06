import React, { useState, useCallback, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  Container,
  Form,
  Input,
  Item,
  Label,
  Header,
  Button,
} from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";

import BgImage from "src/assets/bg.png";
import btnOk from "src/assets/titleScene/btnOk.png";
import btnKinoko from "src/assets/titleScene/btnKinoko.png";
import btnTake from "src/assets/titleScene/btnTake.png";
import modal from "src/assets/titleScene/createUser_modal.png";
import form from "src/assets/titleScene/factionborder.png";
import { AuthContext } from "src/utils/auth";

import "firebase/firestore";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const SettingUserScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const { signup, signin } = useContext(AuthContext);

  const onHomePress = () => {
    navigation.navigate("Home");
  };

  const onTakePress = () => {
    navigation.navigate("Home");
  };

  const onKinokoPress = () => {
    navigation.navigate("Home");
  };

  const onSettingOkPress = () => {

  };

  return (
    <>
      <View style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <Form>
            {errorMsg !== null && <Text>{errorMsg}</Text>}
            <Text style={Styles.textStyle}>プレイヤー名</Text>
            <ImageBackground source={form} style={Styles.image}>
              <View style={Styles.sectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Enter Your Name"
                  onChangeText={(name) => setEmail(name)}
                />
              </View>
            </ImageBackground>

            <Text style={Styles.textStyle}>寝る時間</Text>
            <ImageBackground source={form} style={Styles.image}>
              <View style={Styles.sectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  secureTextEntry={true}
                  placeholder="Enter Your Password"
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
            </ImageBackground>

            <Text style={Styles.textStyle}>起きる時間</Text>
            <ImageBackground source={form} style={Styles.image}>
              <View style={Styles.sectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  secureTextEntry={true}
                  placeholder="Enter Your Password"
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
            </ImageBackground>

            <Text style={Styles.textStyle}>たけのこ派？きのこ派？</Text>
            <ImageBackground source={form} style={Styles.selectFormImage}>
              <View style={Styles.selectBoxStyle}>
              <TouchableOpacity onPress={onTakePress}>
                <Image style={Styles.selectImageTake} source={btnTake} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onKinokoPress}>
                <Image style={Styles.selectImageKinoko} source={btnKinoko} />
              </TouchableOpacity>
              </View>
            </ImageBackground>

            <TouchableOpacity onPress={onSettingOkPress}>
              <Image style={Styles.image} source={btnOk} />
            </TouchableOpacity>
          </Form>
        </ImageBackground>
      </View>
    </>
  );
};

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
    justifyContent: "center",
    alignItems: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 22,
    borderRadius: 5,
    margin: 10,
  },
  formImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  textStyle: {
    margin: 10,
  },
  selectFormImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    resizeMode: "stretch",
  },
  selectBoxStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
  },
  selectImageTake: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 50,
    marginRight: 30,
  },
  selectImageKinoko: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 50,
    marginLeft: 30,
  },
});

export default SettingUser;
