import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { format as formatTZ } from "date-fns-tz";

import { AuthContext } from "src/utils/auth";

import * as firebase from "firebase";
import "firebase/firestore";

export const SleepTime = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const db = firebase.firestore();

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDatePicked = (date) => {
    db.collection("events")
      .add({
        uid: currentUser.uid,
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
        // error
        setErrorMsg(error);
      });
    hideDateTimePicker();
  };

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Button title="Sleep_time" onPress={showDateTimePicker}></Button>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={handleDatePicked}
          mode="time"
          onCancel={hideDateTimePicker}
        />
      </View>
    </>
  );
};

export const GetUpHopeTime = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const db = firebase.firestore();

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDatePicked = (date) => {
    db.collection("events")
      .add({
        uid: currentUser.uid,
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
        // error
        setErrorMsg(error);
      });
    hideDateTimePicker();
  };

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Button title="Getup_hope_time" onPress={showDateTimePicker}></Button>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={handleDatePicked}
          mode="time"
          onCancel={hideDateTimePicker}
        />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});
