import * as React from 'react';
import 'react-native-gesture-handler';
import Login from './views/login';
import Home from './views/home';
import LoginConfirm from './views/loginconfirm';
import Cadastro from './views/cadastro';
import CadastroConfirm from './views/cadastroConfirm';
import LocationEnable from './views/locationEnable';
import BuscarVaga from './views/buscarVaga';
import Gps from './views/gps';
import Load from './views/load';
import Favoritos from './views/favoritos';
import Settings from './views/settings';
import Sobre from './views/sobre';
import EditarDados from './views/editarDados';
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
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroConfirm" component={CadastroConfirm} />
      <Stack.Screen name="LocationEnable" component={LocationEnable} />
      <Stack.Screen name="BuscarVaga" component={BuscarVaga} />
      <Stack.Screen name="Gps" component={Gps} />
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="EditarDados" component={EditarDados} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="EDITAR DADOS" component={EditarDados} />
        <Drawer.Screen name="BUSCAR VAGA" component={Load}/>
        <Drawer.Screen name="FAVORITOS" component={Favoritos} />
        <Drawer.Screen name="CONFIGURAÇÕES" component={Settings} />
        <Drawer.Screen name="SOBRE" component={Sobre} />
        <Drawer.Screen name="S A I R  D O  A P P" component={Stackers} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
