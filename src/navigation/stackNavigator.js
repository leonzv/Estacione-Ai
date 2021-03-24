import * as React from "react";
import "react-native-gesture-handler";
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
      drawerStyle={{ width: '75%' }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Inicio" component={MainStackNavigator}/>   
      <Drawer.Screen options={{ swipeEnabled: false }} name="Login" component={Login} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Cadastro" component={Cadastro} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="CadastroConfirm" component={CadastroConfirm} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="LoginConfirm" component={LoginConfirm} />   
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
