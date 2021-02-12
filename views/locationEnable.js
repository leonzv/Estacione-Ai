import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';

export default function LocationEnable(props) {
    return(
        <View style={Style.blackground}>
            <Text style={Style.activeBigText}>Ótimo Trabalho!</Text>
            <Image
                style={Style.btnVerde}
                source={require('../img/btnVerde.png')}
            />
            <Text style={Style.activeSmallText}>Agora, precisamos saber a sua localização.</Text>
            <TouchableOpacity 
                style={Style.localActive}
                onPress={() => props.navigation.navigate('BuscarVaga')}>   
                <Text style={Style.localActiveText}>ATIVAR MINHA LOCALIZAÇÃO</Text>
            </TouchableOpacity>
        </View>
    );
}