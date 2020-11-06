import React, { useState, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Container, Content, Header, Button } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";
import { format as formatTZ } from "date-fns-tz";

import WithHeader from "src/components/WithHeader";
import BgImage from "src/assets/corr_homebg.png";
import UnityScreen from "src/containers/UnityScreen";
import SettingScreen from "src/containers/SettingScreen";
import { AuthContext } from "src/utils/auth";

import * as firebase from "firebase";
import "firebase/firestore";

const Stack = createStackNavigator();

const { width, height, scale } = Dimensions.get("window");

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const HomeScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);

  const onUnityPress = () => {
    navigation.navigate("UnityScreen");
    var db = firebase.firestore();
    var date = new Date();
    db.collection("events")
      .add({
        user_id: currentUser.uid,
        getup_time: formatTZ(
          date,
          "yyyy-MM-dd HH:mm:ss xxx",
          {
            timeZone: "Asia/Tokyo",
          },
          { merge: true }
        ),
      })
      .catch((error) => {
        // error
        setErrorMsg(error);
      });
  };

  const onSettingTimePress = () => {
    navigation.navigate("SettingScreen");
  };

  return (
    <>
      <View style={Styles.container}>
        <ImageBackground
          source={BgImage}
          style={{ width: width, height: height }}
        >
          <View style={Styles.image}>
            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={onUnityPress}
            >
              <Text style={{ color: "white" }}>ゲームを選択</Text>
            </Button>
            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={onSettingTimePress}
            >
              <Text style={{ color: "white" }}>生活習慣を設定</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const Home = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UnityScreen" component={UnityScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
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

export default Home;
