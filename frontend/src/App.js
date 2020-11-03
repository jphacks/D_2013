import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UnityView from "@asmadsen/react-native-unity-view";
import config from "./utils/config";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
} from "native-base";
import { render } from "react-dom";

firebase.initializeApp(config);
import UnityView from "@asmadsen/react-native-unity-view";

export default function App() {
  this.state = {
    email: "",
    password: "",
  };

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("最低６文字以上でおねがいします");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginWithFacebook = async () => {
    await Facebook.initializeAsync("374656767218522");

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["email", "public_profile"],
    });

    type == "success"
      ? ((credential = firebase.auth.FacebookAuthProvider.credential(token)),
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error);
          }))
      : console.log(error);
  };

  return (
    <View style={styles.container}>
      <Text>Hello JPHacks2020!</Text>
      <UnityView
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </View>
    // <Container style={styles.container}>
    //   <Form>
    //     <Item>
    //       <Label>Email</Label>
    //       <Input
    //         autoCorrect={false}
    //         autoCapitalize="none"
    //         onChangeText={(email) => this.setState({ email })}
    //       />
    //     </Item>

    //     <Item>
    //       <Label>Password</Label>
    //       <Input
    //         secureTextEntry={true}
    //         autoCorrect={false}
    //         autoCapitalize="none"
    //         onChangeText={(password) => this.setState({ password })}
    //       />
    //     </Item>

    //     <Button
    //       style={{ marginTop: 10 }}
    //       full
    //       rounded
    //       success
    //       onPress={() => this.loginUser(this.state.email, this.state.password)}
    //     >
    //       <Text style={{ color: "white" }}>Login</Text>
    //     </Button>

    //     <Button
    //       style={{ marginTop: 10 }}
    //       full
    //       rounded
    //       primary
    //       onPress={() => this.signUpUser(this.state.email, this.state.password)}
    //     >
    //       <Text style={{ color: "white" }}>Sign Up</Text>
    //     </Button>

    //     <Button
    //       style={{ marginTop: 10 }}
    //       full
    //       rounded
    //       primary
    //       onPress={() => this.loginWithFacebook()}
    //     >
    //       <Text style={{ color: "white" }}>Login with Facebook</Text>
    //     </Button>
    //   </Form>
    // </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});
