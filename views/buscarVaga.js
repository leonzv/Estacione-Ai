import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';

export default function BuscarVaga(props) {
    return(
        <View style={Style.blackground}>
            <Text style={Style.activeBigText}>Perfeito!</Text>
            <Image
                style={Style.btnVerde}
                source={require('../img/btnVerde.png')}
            />
            <Text style={Style.buscarSmallText}>Deixe o resto com a gente agora! 
            Vamos buscar um estacionamento com vaga disponível para você.</Text>
            <TouchableOpacity 
                style={Style.localActive}
                onPress={() => props.navigation.navigate('Load')}>   
                <Text style={Style.localActiveText}>BUSCAR VAGA PARA O MEU VEÍCULO</Text>
            </TouchableOpacity>
        </View>
    );
}