import * as React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import Login from "../views/login";
import LoginConfirm from "../views/loginConfirm";
import Cadastro from "../views/cadastro";
import CadastroConfirm from "../views/cadastroConfirm";
import LocationEnable from "../views/locationEnable";
import BuscarVaga from "../views/buscarVaga";
import Gps from "../views/gps";
import Load from "../views/load";
import Favoritos from "../views/favoritos";
import Settings from "../views/settings";
import Sobre from "../views/sobre";
import EditarDados from "../views/editarDados";
import LoadFoto from "../views/loadFoto";
import UpFoto from "../views/upFoto";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from './drawerContent';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: "none",
};

const StackDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      /*drawerStyle={{
        backgroundColor: '#FF5510',
        width: '75%',
      }}
      drawerContentOptions={{
          activeTintColor: '#FF002B',
          activeBackgroundColor: '#FF002B',
          inactiveTintColor: '#FF002B',
          inactiveBackgroundColor: '#FF002B',
          marginTop: 80,
          labelStyle:{
            marginLeft: 5,
            color: '#fff',
            fontSize: 16,
          }
        }}*/
    >
      <Drawer.Screen name="Inicio" component={MainStackNavigator}/>      
    </Drawer.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroConfirm" component={CadastroConfirm} />
      <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
      <Stack.Screen name="LocationEnable" component={LocationEnable} />
      <Stack.Screen name="BuscarVaga" component={BuscarVaga} />
      <Stack.Screen name="Gps" component={Gps} />
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="LoadFoto" component={LoadFoto} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="EditarDados" component={EditarDados} />
      <Stack.Screen name="UpFoto" component={UpFoto} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator, StackDrawer };