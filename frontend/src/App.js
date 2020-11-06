import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Title from "src/containers/Title";

const Stack = createStackNavigator();

const StackNavigatorProps = {
  mode: "modal",
  headerMode: "none",
  options: { cardStyle: { backgroundColor: "transparent" } },
};

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator {...StackNavigatorProps}>
        <Stack.Screen name="Title" component={Title} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
