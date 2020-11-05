import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Title from "src/containers/Title";

import firebase from "firebase";
import { AuthProvider } from "src/utils/auth";
import { config } from "src/utils/config";

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const App = () => (
  <>
    <NavigationContainer>
      <AuthProvider auth={auth}>
        <Stack.Navigator {...StackNavigatorProps}>
          <Stack.Screen name="Title" component={Title} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  </>
);

export default App;
