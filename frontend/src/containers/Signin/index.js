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

import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

import BgImage from "src/assets/bg.png";
import btnLogin from "src/assets/titleScene/createUser_btnNewCreateAccount.png";
import btnLogin2 from "src/assets/titleScene/createUser_btnLogin2.png";
import btnLogin3 from "src/assets/titleScene/createUser_btnFacebook.png";
import modal from "src/assets/titleScene/createUser_modal.png";
import form from "src/assets/titleScene/factionborder.png";
import { AuthContext } from "src/utils/auth";
import SettingUser from "src/containers/SettingUser";

import "firebase/firestore";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const SigninScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { signup, signin } = useContext(AuthContext);

  const rootSetting = useCallback(() => navigation.navigate("SettingUser"), []);

  const signUpUser = () => {
    try {
      if (password.length < 6) {
        setErrorMsg("6文字以上で入力してください。");
        return;
      }
      signup(
        email,
        password,
        () => {
          rootSetting();
        },
        (error) => {
          // error
          setErrorMsg(error);
        }
      );
    } catch (error) {
      console.log(error.toString());
    }
  };

  const loginUser = () => {
    try {
      signin(
        email,
        password,
        () => {
          rootSetting();
        },
        (error) => {
          // error
          setErrorMsg("パスワードが間違えています。");
        }
      );
    } catch (error) {
      setErrorMsg(error.toString());
    }
  };

  const loginWithFacebook = async () => {
    await Facebook.initializeAsync("374656767218522");

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["email", "public_profile"],
    });

    type == "success"
      ? ((credential = firebase.auth.FacebookAuthProvider.credential(token)),
        signinWithCredential(
          credential,
          () => {
            rootSetting();
          },
          (error) => {
            // error
            setErrorMsg(error);
          }
        ))
      : setErrorMsg(error);
  };

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <Container style={Styles.container}>
        <ImageBackground source={BgImage} style={Styles.image}>
          <Form>
            <Text style={Styles.textStyle}>Eメール</Text>
            <ImageBackground source={form} style={Styles.image}>
              <View style={Styles.sectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Enter Your Email"
                  onChangeText={(email) => setEmail(email)}
                />
              </View>
            </ImageBackground>

            <Text style={Styles.textStyle}>パスワード</Text>
            <ImageBackground source={form} style={Styles.image}>
              <View style={Styles.sectionStyle}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Enter Your Password"
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
            </ImageBackground>
            <TouchableOpacity onPress={loginUser}>
              <Image style={Styles.image} source={btnLogin2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={signUpUser}>
              <Image style={Styles.image} source={btnLogin3} />
            </TouchableOpacity>

            <TouchableOpacity onPress={loginWithFacebook}>
              <Image style={Styles.image} source={btnLogin} />
            </TouchableOpacity>
          </Form>
        </ImageBackground>
      </Container>
    </>
  );
};

const Signin = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SettingUser" component={SettingUser} />
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
});

export default Signin;
