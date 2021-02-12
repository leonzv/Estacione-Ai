import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import react from 'react';

export default function Cadastro(props) {
    const [nome, setNome] = react.useState('');
    const [cpf, setCpf] = react.useState('');
    const [rg, setRg] = react.useState('');
    const [cidade, setCidade] = react.useState('');
    const [estado, setEstado] = react.useState('');
    const [pais, setPais] = react.useState('');
    const [placa, setPlaca] = react.useState('');
    const [modelo, setModelo] = react.useState('');
    const [senha, setSenha] = react.useState('');
    const [senhaConfirm, setSenhaConfirm] = react.useState('');
  return (
    <View style={Style.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '19%',
        flexDirection: 'row',
      }}>
        <Image
          style={Style.car}
          source={require('../img/carro.png')}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>Estacione Aí</Text>
      </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>N o m e:</Text>
            <TextInput
              style={{width: '80%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setNome(text)}
              value={nome}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>C P F:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setCpf(text)}
              value={cpf}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>R G:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setRg(text)}
              value={rg}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>C i d a d e:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setCidade(text)}
              value={cidade}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>E s t a d o:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setEstado(text)}
              value={estado}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>P a í s:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setPais(text)}
              value={pais}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>P l a c a:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setPlaca(text)}
              value={placa}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>M o d e l o:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setModelo(text)}
              value={modelo}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={Style.userText}>S e n h a:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setSenha(text)}
              value={senha}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.boxLoginConfirm}>
            <Text style={{
                color: '#fff',
                fontSize: 12,
                textAlign: 'left',
                marginLeft: 15,
                }}>C o n f i r m a r  S e n h a:</Text>
            <TextInput
              style={{width: '83%', height: '100%', color: '#fff',}}
              onChangeText={(text) => setSenhaConfirm(text)}
              value={senhaConfirm}
              placeholderTextColor="#fff"
            />
        </View>
        <View style={Style.containerBoxLogin}>
        <TouchableOpacity style={Style.boxLeftLoginConfirm}
        onPress={() => props.navigation.navigate('CadastroConfirm')}>
        <Text style={Style.loginEntrarText}>A V A N Ç A R</Text>
        </TouchableOpacity>
          <TouchableOpacity style={Style.boxRightLoginConfirm}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={Style.loginSocialText}>C A N C E L A R</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={Style.boxLogin}>
            <Text style={Style.boxLoginText}>C A D A S T R A R</Text>
          </TouchableOpacity>
        <View style={Style.containerBoxLogin}>
          <TouchableOpacity style={Style.boxLoginFacebook}>
          <Text style={Style.loginSocialText}>LOGIN COM FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.boxLoginGoogle}>
          <Text style={Style.loginSocialText}>LOGIN COM GOOGLE</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
}