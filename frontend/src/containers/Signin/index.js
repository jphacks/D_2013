import React, { useState, useCallback, useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
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
          <Text style={{ color: "#888", fontSize: 18 }}>
            タコ天にちょっと勝ちたい
          </Text>
          <Form>
            <Item>
              <Label>Eメール</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
              />
            </Item>

            <Item>
              <Label>パスワード</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
              />
            </Item>

            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={loginUser}
            >
              <Text style={{ color: "white" }}>ログイン</Text>
            </Button>

            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={signUpUser}
            >
              <Text style={{ color: "white" }}>サインアップ</Text>
            </Button>

            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={loginWithFacebook}
            >
              <Text style={{ color: "white" }}>Facebookログイン</Text>
            </Button>
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Signin;
