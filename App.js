import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackDrawer } from "./src/navigation/stackNavigator";
import { useColorScheme, Appearance } from "react-native";
import {FontProvider} from "./src/contexts/FontContext";
export default function App() {
  return (
    <FontProvider>
      <NavigationContainer>
       <StackDrawer/>
      </NavigationContainer>
    </FontProvider>
  );
}
