import React, {useState, useContext} from 'react';
import {Text, View, Switch, TextInput, TouchableOpacity} from 'react-native';
import Style from '../style/style';
import Slider from '@react-native-community/slider';
import {CustomText} from '../components/CustomText';
import {FontContext} from '../contexts/FontContext';

export default function Settings({route, navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [codigo, setCodigo] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {goBack} = navigation;
  const {FONTS, onChangeFonts} = useContext(FontContext);
  const changeFontSize = value => {
    const updatedFonts = Object.keys(FONTS).reduce( 
      (accumulator, key) => ({
        ...accumulator,
        [key]: {
          ...FONTS[key],
          lineHeight: FONTS[key].lineHeight,
          fontSize: Number(FONTS[key].defaultValue) + Number(value)
        },
      }),
      {},
    );
    updatedFonts.defaultValue = value;
    onChangeFonts(updatedFonts);
  };
  return (
    <View style={Style.containerDraw}>
      <View style={Style.headerEditar}>
        <CustomText fontType="h3" style={Style.textGps}>Bem vindo, João!</CustomText>
      </View>
      <View style={{backgroundColor: 'black'}}>
        <CustomText fontType="h1"  style={Style.textSettingsTop}>Configurações</CustomText>

        <View>
          <CustomText fontType="body4" style={Style.textSettings}>
            Aumentar o tamanho da fonte:
          </CustomText>
          <Slider
            style={{
              width: '90%',
              height: 60,
              color: '#0087ff',
              marginLeft: 26,
              marginBottom: 20,
            }}
            minimumValue={0}
            maximumValue={3}
            minimumTrackTintColor="#1065bd"
            maximumTrackTintColor="#1065bd"
            thumbTintColor="#0087ff"
            step={1}
            onValueChange={changeFontSize}
          />
        </View>
        <View>
          <CustomText fontType="body4" style={Style.textSettings}>Ativar notificações</CustomText>
          <Switch
            trackColor={{false: '#999', true: '#1065bd'}}
            thumbColor={isEnabled ? '' : '#0087ff'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={Style.switchBtn}
          />
        </View>
        <CustomText fontType="body4" style={Style.textSettings}>Adicionar código promocional</CustomText>
        <View style={Style.codeBox}>
          <CustomText fontType="body3" style={Style.codeText}>I n s e r i r   c ó d i g o:</CustomText>
          <TextInput
            style={{width: '83%', height: '100%', color: '#fff'}}
            onChangeText={text => setCodigo(text)}
            value={codigo}
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style={Style.voltarBoxCode} onPress={() => goBack()}>
          <CustomText fontType="body3" style={Style.textVoltar}>V O L T A R</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
