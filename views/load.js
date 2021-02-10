import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';

export default function Load(props) {
    return(
        <View style={Style.blackground}>
            <Text style={Style.buscarBigText}>Buscando vaga...</Text>
            <View style={Style.primeiraRoda}>
                <View style={Style.segundaRoda}/>
                <View style={Style.terceiraRoda}>
                <Text style={Style.loadText}>75%</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={Style.localActive}
                onPress={() => props.navigation.navigate('Gps')}>   
                <Text style={Style.localActiveText}>CANCELAR</Text>
            </TouchableOpacity>
        </View>
    );
}