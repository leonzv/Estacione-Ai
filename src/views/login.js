import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

export default function Login(props) {
  return (
    <View style={Style.container}>
      <View style={Style.topContainer}>
        <Image
          style={Style.car}
          source={require('../assets/img/carro.png')}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000', fontFamily: "Rubik-Regular",}}>Estacione Aí</Text>
      </View>
      <View style={Style.botContainer}>
        <LinearGradient
          colors={['#FF002B','#FF5510']}
          style={Style.linearGradient}
        >
        <Swiper style={Style.wrapper} loop={false}
        paginationStyle={{top: 160,right: 270, marginLeft: 30,}}
        activeDotColor="rgb(255,255,255)"
        dotColor="rgba(255,255,255,0.5)"
        dotStyle={{ width: 30, height: 6, marginHorizontal: 10,}}
        activeDotStyle={{ width: 50, height: 6, marginHorizontal: 10,}}>
          <View style={Style.swiperLogin}>
            <Text style={Style.swiperText}> Estacione seu carro ou moto de um jeito fácil e intuitivo</Text>
          </View>
          <View style={Style.swiperLogin}>
            <Text style={Style.swiperText}> Chame um carro de forma simples e escolha o valor que pode pagar</Text>
          </View>
        </Swiper>
        </LinearGradient>
        <View style={{flexDirection: 'column',flex:1,}}>
          <TouchableOpacity 
          style={Style.boxLogin}
          onPress={() => props.navigation.navigate('LoginConfirm')}>   
            <Text style={Style.boxLoginText}>L O G I N</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.boxLogin}
          onPress={() => props.navigation.navigate('Cadastro')}>
            <Text style={Style.boxLoginText}>C A D A S T R A R</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.containerBoxLogin}>
          <TouchableOpacity style={Style.boxLoginFacebook}><Text style={Style.loginSocialText}>LOGIN COM FACEBOOK</Text></TouchableOpacity>
          <TouchableOpacity style={Style.boxLoginGoogle}><Text style={Style.loginSocialText}>LOGIN COM GOOGLE</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}