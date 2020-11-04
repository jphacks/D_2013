import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { MAIN_COLOR } from "src/utils/color";

const WithHeader = (component, title, options = {}) => {
  const Stack = createStackNavigator();
  return () => (
    <Stack.Navigator>
      <Stack.Screen
        name={title}
        component={component}
        options={{
          title: title,
          headerStyle: {
            backgroundColor: MAIN_COLOR,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          ...options,
        }}
      />
    </Stack.Navigator>
  );
};

export default WithHeader;