import * as React from 'react';
import 'react-native-gesture-handler';
import { MainStackNavigator } from "./src/navigation/stackNavigator";
import { LoginStackNavigator } from "./src/navigation/stackNavigator";
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
