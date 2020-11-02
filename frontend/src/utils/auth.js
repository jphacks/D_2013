import React from 'react';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';

export class Auth extends React.Component {
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
        alert('みじけーんだよ');
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }

  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user);
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

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      });
    }
  }
}
