import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { config } from "./utils/config.js";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }
  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('6文字以上でお願いします');
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Setting');
    } catch (error) {
      console.log(error.toString());
    }

  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user);
        this.props.navigation.navigate('Setting');
      })
    } catch (error) {
      console.log(error.toString());
    }
  }

  async loginWithFacebook() {
    await Facebook.initializeAsync(
      '374656767218522'
    );

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['email', 'public_profile'] }
    );

    type == "success" ? (
      credential = firebase.auth.FacebookAuthProvider.credential(token),
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error);
      }),

      this.props.navigation.navigate('Setting')
    ) : (console.log(error));
  }
  render() {
    return (
      <Container style={Styles.container}>
        <Text style={{ color: '#888', fontSize: 18 }}>タコ天にちょっと勝ちたい</Text>
        <Form>
          <Item>
            <Label>Eメール</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item>
            <Label>パスワード</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>ログイン</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>サインアップ</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}>Facebookログイン</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}