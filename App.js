import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, ScrollView } from 'react-native';
import Login from './views/login';
import Home from './views/home';
import LoginConfirm from './views/loginConfirm';
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
import LoadFoto from './views/loadFoto';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>

        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View style={[ styles.containHeader, { backgroundColor: theme.pri700 }]}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avatar size='large' rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} />
                <Text style={{ color: '#f9f9f9', marginTop: '3%', fontFamily: 'sans-serif-condensed' }}>{`Hi ${user.firstname}`}</Text>
                <Text style={{ color: '#f9f9f9', fontFamily: 'sans-serif-condensed' }}>{`${user.email}`}</Text>
              </View>
            </View>

            <DrawerItems {...this.props} />

            <View>
              <View style={{ marginTop: '2%' }}>
                <Divider style={{ backgroundColor: '#777f7c90' }} />
              </View>
              <View style={{ marginTop: '3%' }}>
                <ColorPalette />
              </View>
              <View style={{ marginTop: '5%' }}>
                <Divider style={{ backgroundColor: '#777f7c90' }} />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>

        <View elevation={6} style={{ backgroundColor: '#ffffff' }}>
          <TouchableNativeFeedback background={ripple}>
            <View style={styles.containDrawerOption}>
              <Icon
                name='logout'
                type='simple-line-icon'
                size={20}
                color={theme.pri700}
                containerStyle={{ marginRight: '10%' }}
              />
              <Text style={{ color: 'black', fontFamily: 'sans-serif-medium' }}>Logout</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback background={ripple}>
            <View style={styles.containDrawerOption}>
              <Icon
                name='user-secret'
                type='font-awesome'
                size={24}
                color={theme.pri700}
                containerStyle={{ marginRight: '10%' }}
              />
              <Text style={{ color: 'black', fontFamily: 'sans-serif-medium' }}>Developer</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

      </View>
  );
}

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
      <Drawer.Navigator
        drawerStyle={{
        backgroundColor: '#FF5510',
        width: 300,
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
        }}>
        <Drawer.Screen name="PÁGINA INICIAL" component={Stackers} />
        <Drawer.Screen name="EDITAR DADOS" component={EditarDados} />
        <Drawer.Screen name="BUSCAR VAGA" component={Load}/>
        <Drawer.Screen name="FAVORITOS" component={Favoritos} />
        <Drawer.Screen name="CONFIGURAÇÕES" component={Settings} />
        <Drawer.Screen name="SOBRE" component={Sobre} />
        <Drawer.Screen name="S A I R  D O  A P P" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
