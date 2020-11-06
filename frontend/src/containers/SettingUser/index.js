import React, { useState, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { Form } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import DateTimePicker from "react-native-modal-datetime-picker";
import { format as formatTZ } from "date-fns-tz";

import BgImage from "src/assets/corr2_createAccount.png";
import btnClick from "src/assets/titleScene/btnClick.png";
import btnOk from "src/assets/titleScene/btnOk.png";
import btnKinoko from "src/assets/titleScene/btnKinoko.png";
import btnTake from "src/assets/titleScene/btnTake.png";
import form from "src/assets/titleScene/factionborder.png";
import { AuthContext } from "src/utils/auth";

import * as firebase from "firebase";
import "firebase/firestore";
import Home from "src/containers/Home";

const Stack = createStackNavigator();

const { width, height, scale } = Dimensions.get("window");

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const SettingUserScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState(null);
  const [viewSleepDate, setViewSleepDate] = useState(null);
  const [viewDate, setViewDate] = useState(null);
  const [
    isDateTimePickerVisible_Sleep,
    setIsDateTimePickerVisible_Sleep,
  ] = useState(false);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const db = firebase.firestore();

  const onTakePress = () => {
    navigation.navigate("Home");
  };

  const onKinokoPress = () => {
    navigation.navigate("Home");
  };

  const showDateTimePicker_Sleep = () => {
    setIsDateTimePickerVisible_Sleep(true);
  };

  const hideDateTimePicker_Sleep = () => {
    setIsDateTimePickerVisible_Sleep(false);
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const SleepTimePress = (date) => {
    setViewSleepDate(date);
    db.collection("events")
      .add({
        user_id: currentUser.uid,
        sleep_time: formatTZ(
          date,
          "yyyy-MM-dd HH:mm:ss xxx",
          {
            timeZone: "Asia/Tokyo",
          },
          { merge: true }
        ),
      })
      .catch((error) => {
        setErrorMsg(error);
      });
    hideDateTimePicker_Sleep();
  };

  const GetUpHopeTimePress = (date) => {
    setViewDate(date);
    db.collection("events")
      .add({
        user_id: currentUser.uid,
        getup_hope_time: formatTZ(
          date,
          "yyyy-MM-dd HH:mm:ss xxx",
          {
            timeZone: "Asia/Tokyo",
          },
          { merge: true }
        ),
      })
      .catch((error) => {
        setErrorMsg(error);
      });
    hideDateTimePicker();
  };

  const onSettingOkPress = () => {
    if (String(name) === "null") {
      setErrorMsg("名前を入力してください");
      return;
    }
    db.collection("users")
      .doc(currentUser.uid)
      .set(
        {
          name: name,
          score: 0,
          on_Game: false,
        },
        { merge: true }
      )
      .catch((error) => {
        setErrorMsg(error);
      });
    navigation.navigate("Home");
  };

  return (
    <>
      <View style={Styles.container}>
        <ImageBackground
          source={BgImage}
          style={{ width: width, height: height }}
        >
          <View style={Styles.image}>
            <Form>
              <View style={{ marginTop: 180 }}></View>
              {errorMsg !== null && <Text>{errorMsg}</Text>}
              <Text style={Styles.textStyle}>プレイヤー名</Text>
              <ImageBackground source={form} style={Styles.image}>
                <View style={Styles.sectionStyle}>
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Enter Your Name"
                    onChangeText={(name) => setName(name)}
                  />
                </View>
              </ImageBackground>

              <Text style={Styles.textStyle}>寝る時間</Text>
              <ImageBackground source={form} style={Styles.image}>
                <View style={Styles.sectionStyle}>
                  {String(viewSleepDate) != "null" ? (
                    <Text style={{ flex: 1 }}>{String(viewSleepDate)}</Text>
                  ) : (
                    <Text style={{ flex: 1 }} />
                  )}
                  <TouchableOpacity
                    title="Sleep_time"
                    onPress={showDateTimePicker_Sleep}
                  >
                    <Image style={Styles.okImage} source={btnClick} />
                    <DateTimePicker
                      isVisible={isDateTimePickerVisible_Sleep}
                      onConfirm={SleepTimePress}
                      mode="time"
                      onCancel={hideDateTimePicker_Sleep}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>

              <Text style={Styles.textStyle}>起きる時間</Text>
              <ImageBackground source={form} style={Styles.image}>
                <View style={Styles.sectionStyle}>
                  {String(viewDate) != "null" ? (
                    <Text style={{ flex: 1 }}>{String(viewDate)}</Text>
                  ) : (
                    <Text style={{ flex: 1 }} />
                  )}
                  <TouchableOpacity
                    title="Getup_hope_time"
                    onPress={showDateTimePicker}
                  >
                    <Image style={Styles.okImage} source={btnClick} />
                    <DateTimePicker
                      isVisible={isDateTimePickerVisible}
                      onConfirm={GetUpHopeTimePress}
                      mode="time"
                      onCancel={hideDateTimePicker}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>

              <Text style={Styles.textStyle}>たけのこ派？きのこ派？</Text>
              <ImageBackground source={form} style={Styles.selectFormImage}>
                <View style={Styles.selectBoxStyle}>
                  <TouchableOpacity onPress={onTakePress}>
                    <Image style={Styles.selectImageTake} source={btnTake} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onKinokoPress}>
                    <Image
                      style={Styles.selectImageKinoko}
                      source={btnKinoko}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>

              <TouchableOpacity onPress={onSettingOkPress}>
                <Image style={Styles.image} source={btnOk} />
              </TouchableOpacity>
            </Form>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const SettingUser = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="SettingUserScreen" component={SettingUserScreen} />
        <Stack.Screen name="Home" component={Home} />
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
  okImage: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    width: 25,
    height: 25,
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
  selectFormImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    resizeMode: "stretch",
  },
  selectBoxStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
  },
  selectImageTake: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 50,
    marginRight: 30,
  },
  selectImageKinoko: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 50,
    marginLeft: 30,
  },
});

export default SettingUser;
