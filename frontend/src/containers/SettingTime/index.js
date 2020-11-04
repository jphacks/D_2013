// import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";

// const Stack = createStackNavigator();

export const SleepTime = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>睡眠時間設定 Screen</Text>
      </View>
    </>
  );
};

export const GetUpTime = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDateTimePickerVisible] = useState(false);

  const showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  const hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  const handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Button title="Show DatePicker" onPress={showDateTimePicker}>
          <Text style={{ color: "white" }}>時間設定</Text>
        </Button>
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

export const PartySetting = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Text style={{ color: "#888", fontSize: 18 }}>派閥設定 Screen</Text>
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

// export default () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//   >
//     <Stack.Screen name="SleepTime" component={SleepTime} />
//     <Stack.Screen name="GetUpTime" component={GetUpTime} />
//     <Stack.Screen name="PartySetting" component={PartySetting} />
//   </Stack.Navigator>
// );
