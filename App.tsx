import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { WelcomeProvider } from "./src/contexts/welcome";
import WelcomeView from "./src/pages/welcome/view";

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <WelcomeProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Welcome'} component={WelcomeView} />
        </Stack.Navigator>
      </WelcomeProvider>
    </NavigationContainer>
  );
}

export default App;