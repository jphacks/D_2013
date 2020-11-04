import React, { useState, useEffect } from "react";
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

import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

import { config } from "src/utils/config.js";
import WithHeader from "src/components/WithHeader";
import BgImage from "src/assets/bg.png";

import "firebase/firestore";

firebase.initializeApp(config);
const db = firebase.firestore();

const Account = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const rootSetting = ({ navigation }) => {
    navigation.navigate("Setting");
  };
  const signUpUser = () => {
    try {
      if (password.length < 6) {
        alert("みじけーんだよ");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (obj) {
          // success
          const id = obj.user.uid;
          db.collection("users").doc(id).set({
            name: name,
            email: email,
          });
          rootSetting();
        })
        .catch((error) => {
          // error
          setErrorMsg(error);
        });
    } catch (error) {
      setErrorMsg(error.toString());
    }
  };

  const loginUser = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (obj) {
          // success
          const id = obj.user.uid;

          db.collection("users").doc(id).set({
            name: name,
            email: email,
          });
          rootSetting();
        })
        .catch((error) => {
          // error
          setErrorMsg(error);
        });
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
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (obj) {
            // success
            console.log(obj.user.uid);
          })
          .catch((error) => {
            setErrorMsg(error);
          }),
        rootSetting())
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
            <Label>名前</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setName}
            />
          </Item>

          <Item>
            <Label>Eメール</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
          </Item>

          <Item>
            <Label>パスワード</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
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

export default WithHeader(Account, "アカウント");
