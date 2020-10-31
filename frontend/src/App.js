import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello JPHacks2020!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
