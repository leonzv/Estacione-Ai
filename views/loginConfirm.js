import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import react from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

export default function LoginConfirm(props) {
    const [usuario, setUsuario] = react.useState('');
    const [senha, setSenha] = react.useState('');
  return (
    <View style={Style.container}>
      <View style={Style.topContainerConfirm}>
        <Image
          style={Style.car}
          source={require('../img/carro.png')}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>Estacione Aí</Text>
      </View>
      <View style={Style.botContainer}>
        <LinearGradient
          colors={['#FF002B','#FF5510']}
          style={Style.linearGradient}
        >
        <Swiper style={Style.wrapper} loop={false}>
          <View style={Style.swiperLogin}>
            <Text style={Style.swiperText}> Estacione seu carro ou moto de um jeito fácil e intuitivo</Text>
          </View>
          <View style={Style.swiperLogin}>
            <Text style={Style.swiperText}> Chame um carro de forma simples e escolha o valor que pode pagar</Text>
          </View>
        </Swiper>
        </LinearGradient>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>U s u á r i o:</Text>
            <TextInput
              style={{width: '80%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setUsuario(text)}
              value={usuario}
              placeholderTextColor="#fff"
              autoCapitalize="words"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>S e n h a:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setSenha(text)}
              value={senha}
              placeholderTextColor="#fff"
              autoCapitalize="words"
            />
        </View>
        <View style={Style.containerBoxLogin}>
        <TouchableOpacity style={Style.boxLeftLoginConfirm}
        onPress={() => props.navigation.navigate('Load')}>
        <Text style={Style.loginEntrarText}>E N T R A R</Text>
        </TouchableOpacity>
          <TouchableOpacity style={Style.boxRightLoginConfirm}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={Style.loginSocialText}>C A N C E L A R</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.containerBoxLogin}>
          <TouchableOpacity style={Style.boxLoginFacebook}>
          <Text style={Style.loginSocialText}>LOGIN COM FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.boxLoginGoogle}>
          <Text style={Style.loginSocialText}>LOGIN COM GOOGLE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}