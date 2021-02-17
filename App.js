import * as React from "react";
import "react-native-gesture-handler";
import Login from "./views/login";
import Home from "./views/home";
import Cadastro from "./views/cadastro";
import LoadHome from "./views/loadHome";
import Procurar from "./views/procurar";
import Condutores from "./views/condutores";
import Contato from "./views/contato";
import Pagamentos from "./views/pagamentos";
import Configuracoes from "./views/configuracoes";
import Sobre from "./views/sobre";
import Mapa from "./views/mapa";
import Chamar from "./views/chamar";
import LoginConfirm from "./views/loginConfirm";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: "none",
};

function Stackers() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="LoadHome" component={LoadHome} />
      <Stack.Screen name="Procurar" component={Procurar} />
      <Stack.Screen name="Condutores" component={Condutores} />
      <Stack.Screen name="Contato" component={Contato} />
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
      <Stack.Screen name="Chamar" component={Chamar} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#00298F",
          width: 320,
        }}
        drawerContentOptions={{
          activeTintColor: "#00298F",
          activeBackgroundColor: "#00298F",
          inactiveTintColor: "#00298F",
          inactiveBackgroundColor: "#00298F",
          labelStyle: {
            marginLeft: 5,
            color: "#fff",
            fontSize: 24,
          },
        }}
      >
        <Drawer.Screen name="Início" component={Stackers} />
        <Drawer.Screen name="Condutores" component={Condutores} />
        <Drawer.Screen name="Mapa" component={Mapa} />
        <Drawer.Screen name="Configurações" component={Configuracoes} />
        <Drawer.Screen name="Pagamentos" component={Pagamentos} />
        <Drawer.Screen name="Contato" component={Contato} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Sair" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
