import React from "react";

import { NavigationContainer } from "react-navigation-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-bottom-tabs";

import UnityScreen from "src/containers/UnityScreen.js";
import SettingScreen from "src/containers/SettingScreen";
import Account from "src/containers/Account";

// firebase.initializeApp(config);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Unity" component={UnityScreen} />
    <Tab.Screen name="Setting" component={SettingScreen} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
