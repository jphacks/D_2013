import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { config } from "./utils/config.js";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("みじけーんだよ");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate("Setting");
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
          this.props.navigation.navigate("Setting");
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  async loginWithFacebook() {
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
          }),
        this.props.navigation.navigate("Setting"))
      : console.log(error);
  }
  render() {
    return (
      <Container style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>
          タコ天にちょっと勝ちたい
        </Text>
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

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "white" }}>ログイン</Text>
          </Button>

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "white" }}>サインアップ</Text>
          </Button>

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: "white" }}>Facebookログイン</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

// setting
class SettingScreen extends React.Component {
  // class function

  // render
  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>セッティング</Text>
        {/* 睡眠時間 */}
        <Button
          style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.props.navigation.navigate("SleepTimeSetting")}
        >
          <Text style={{ color: "white" }}>睡眠時間設定</Text>
        </Button>
        {/* 起床時間 */}
        <Button
          style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.props.navigation.navigate("GetUpTimeSetting")}
        >
          <Text style={{ color: "white" }}>起床時間設定</Text>
        </Button>
        {/* 派閥設定 */}
        <Button
          style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.props.navigation.navigate("PartySetting")}
        >
          <Text style={{ color: "white" }}>派閥設定</Text>
        </Button>
      </View>
    );
  }
}

// 睡眠時間設定
class SleepTimeSettingScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>睡眠時間設定 Screen</Text>
      </View>
    );
  }
}

// 起床時間設定
class GetUpTimeSettingScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>起床時間設定 Screen</Text>
      </View>
    );
  }
}

// 派閥設定
class PartySettingScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>派閥設定 Screen</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Setting: SettingScreen,
    SleepTimeSetting: SleepTimeSettingScreen,
    GetUpTimeSetting: GetUpTimeSettingScreen,
    PartySetting: PartySettingScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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
