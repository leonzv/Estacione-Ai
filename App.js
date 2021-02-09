import * as React from 'react';
import 'react-native-gesture-handler';
import Login from './views/login';
import Home from './views/home';
import LoginConfirm from './views/loginconfirm';
import Cadastro from './views/cadastro';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

function Stackers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Página Inicial" component={Stackers} />
        <Drawer.Screen name="Sair" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}