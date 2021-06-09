import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  Alert,
  Modal,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
} from 'react-native';
import Style from '../style/style.js';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {CustomText} from '../components/CustomText';


export default function EditarDados({navigation, route}) {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {goBack} = navigation;
  return (
    <View style={Style.container}>
      <HideWithKeyboard style={Style.headerEditar}>
        <Text style={Style.textGps}>
          Bem vindo, João!
        </Text>
      </HideWithKeyboard>
      <HideWithKeyboard style={Style.editarDados}>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            marginLeft: 15,
            fontFamily: 'Renogare',
          }}
        >
          {' '}
          Editar Dados{' '}
        </Text>
      </HideWithKeyboard>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          N o m e:
        </CustomText>
        <TextInput
          style={{width: '80%', height: '100%', color: '#fff'}}
          onChangeText={text => setNome(text)}
          value={nome}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          C i d a d e:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setCidade(text)}
          value={cidade}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          E s t a d o:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setEstado(text)}
          value={estado}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          P a í s:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setPais(text)}
          value={pais}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          P l a c a:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setPlaca(text)}
          value={placa}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          A t u a l i z a r  s e n h a:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setSenha(text)}
          value={senha}
          placeholderTextColor="#fff"
          secureTextEntry={true}
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <CustomText fontType="body4" style={Style.userText}>
          C o n f i r m a r  n o v a  s e n h a:
        </CustomText>
        <TextInput
          style={{width: '83%', height: '100%', color: '#fff'}}
          onChangeText={text => setSenhaConfirm(text)}
          value={senhaConfirm}
          placeholderTextColor="#fff"
          secureTextEntry={true}
        />
      </View>
      <HideWithKeyboard style={Style.carModal}>
        <Image
          style={Style.carBmw1}
          source={require('../assets/img/carrobmw.png')}
        />
        <Text style={Style.textCar1}>Bmw Série 3 2020</Text>
        <View style={{alignItems: 'flex-start', flex: 1}}>
          <TouchableOpacity
            style={[Style.button, Style.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Image
              style={{
                width: 35,
                height: 35,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
              source={require('../assets/img/note.png')}
            />
          </TouchableOpacity>
        </View>
      </HideWithKeyboard>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <Text style={Style.topModalText}>Modelo do carro</Text>
            <Image
              style={Style.carBmwModal}
              source={require('../assets/img/carrobmw.png')}
            />
            <Text style={Style.botModalText}>Bmw Série 3 2020</Text>
            <View style={Style.editarDadosTextBox}>
              <CustomText fontType="body4" style={Style.userText}>
                A t u a l i z a r  M o d e l o:
              </CustomText>
              <TextInput
                style={{width: '83%', height: '100%', color: '#fff'}}
                onChangeText={text => setModelo(text)}
                value={modelo}
                placeholderTextColor="#fff"
              />
            </View>
            <TouchableOpacity style={Style.modalBox}>
              <CustomText fontType="body4" style={Style.loginEntrarText}>
                A T U A L I Z A R
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity
          style={Style.boxLeftLoginConfirm}
          onPress={() => navigation.navigate('Load')}
        >
          <CustomText fontType="body4" style={Style.loginEntrarText}>
            A T U A L I Z A R
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.deletarBox}
          onPress={() => navigation.navigate('Login')}
        >
          <CustomText fontType="body4" style={Style.loginSocialText}>
            D E L E T A R
          </CustomText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={Style.concluirBoxEditar}
        onPress={() => navigation.navigate('TrocarFoto')}
      >
        <CustomText fontType="body4" style={Style.concluirText}>
          A L T E R A R  F O T O
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={Style.voltarBox} onPress={() => goBack()}>
        <CustomText fontType="body3" style={Style.textVoltar}>
          V O L T A R
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}
