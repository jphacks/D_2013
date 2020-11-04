import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker"

const GetUpTime = () => {
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

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});

export default GetUpTime;