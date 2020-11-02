import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import config from './utils/config';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { render } from "react-dom";

firebase.initializeApp(config);

export default function App() {
  this.state = ({
    email: '',
    password: ''
  });

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

  loginWithFacebook = async () => {
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

  return (
    <Container style={styles.container} >
      <Form>
        <Item>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
          />
        </Item>

        <Item>
          <Label>Password</Label>
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
          <Text style={{ color: 'white' }}>Login</Text>
        </Button>

        <Button style={{ marginTop: 10 }}
          full
          rounded
          primary
          onPress={() => this.signUpUser(this.state.email, this.state.password)}
        >
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </Button>

        <Button style={{ marginTop: 10 }}
          full
          rounded
          primary
          onPress={() => this.loginWithFacebook()}
        >
          <Text style={{ color: 'white' }}>Login with Facebook</Text>
        </Button>

      </Form>
    </Container >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});

// 参考までに昔に書いたことあるもの
// process.cwd = function () {
//   return "/";
// };

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const StackNavigatorProps = {
//   mode: "modal",
//   headerMode: "none",
//   options: { cardStyle: { backgroundColor: "transparent" } },
// };

// const TabScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Timeline" component={Timeline} />
//     <Tab.Screen name="PostMap" component={PostMap} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

// const App = () => (
//   <>
//     <NavigationContainer>
//       <Stack.Navigator {...StackNavigatorProps}>
//         <Stack.Screen name="TabScreen" component={TabScreen} />
//         <Stack.Screen
//           name="newPost"
//           component={NewPostModal}
//           options={{
//             title: "Modal",
//             headerStyle: {
//               backgroundColor: "#fff",
//             },
//             headerTitleStyle: {
//               fontWeight: "bold",
//             },
//             cardStyle: { backgroundColor: "transparent" },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//     <FlashMessage position="top" />
//   </>
// );

// export default App;
