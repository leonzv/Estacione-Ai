import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import {CustomText} from "../components/CustomText";

export default function LoadFoto(props) {
    return(
        <View style={Style.blackground}>
            <Text style={Style.activeBigText}>Tudo Certo!</Text>
            <Image
                style={Style.btnVerde}
                source={require('../assets/img/btnVerde.png')}
            />
            <Text style={Style.buscarSmallText}>Agora, precisamos tirar uma foto sua, para o seu perfil.</Text>
            <TouchableOpacity 
                style={Style.localActive}
                onPress={() => props.navigation.navigate('UpFoto')}>   
                <Text style={Style.localActiveText}>T I R A R  U M A  F O T O</Text>
            </TouchableOpacity>
        </View>
    );
}