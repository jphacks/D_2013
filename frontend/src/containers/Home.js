import React, { useState, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from "react-native";
import { Form, Header } from "native-base";

import { Avatar } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { format as formatTZ } from "date-fns-tz";

import WithHeader from "src/components/WithHeader";
import BgImage from "src/assets/corr_homebg.png";
import UnityScreen from "src/containers/UnityScreen";
import SettingScreen from "src/containers/SettingUser";
import btnUnity from "src/assets/titleScene/home_btnChoiceGame.png";
import btnSetting from "src/assets/titleScene/home_btnQOL.png";
import avatar from "src/assets/titleScene/home_icon.png";
import mask from "src/assets/maskA10_2.png";
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
  const { userInfo, currentUser } = useContext(AuthContext);

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
          <Header style={{
    backgroundColor: '#2D4369',
    justifyContent: 'space-around',
          }}>
            <View style={Styles.profile}>
            <Avatar
              style={Styles.profileAvatar}
              size="large"
              source={avatar}
            />
              <Text style={Styles.profileText}>{userInfo?.name}hogehoge</Text>
            </View>
            <Image style={Styles.maskStyle} source={mask} />
            </Header>
          <View style={Styles.image}>
            <TouchableOpacity style={{ marginTop: 370 }} onPress={onUnityPress}>
              <Image style={Styles.image} source={btnUnity} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onSettingTimePress}>
              <Image style={Styles.image} source={btnSetting} />
            </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  profile: {
    position: 'absolute',
    left: 10,
    top: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileText: {
    flexDirection: "row",
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  maskStyle: {
    justifyContent: "flex-end",
    position: 'absolute',
    top: -90,
    right: -10,
  },
});

export default Home;
