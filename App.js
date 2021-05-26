import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackDrawer } from "./src/navigation/stackNavigator";
import { useColorScheme, Appearance } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <StackDrawer/>
    </NavigationContainer>
  );
}
