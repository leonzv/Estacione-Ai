import React from "react";
import { View, Text } from "react-native";
import Style from "../style/style";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#ff012b", "#f96d08"]} style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={Style.drawerContent}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  bottom: 5,
                }}
              />
              <View
                style={{
                  width: "80%",
                  height: 50,
                  alignSelf: "flex-end",
                  justifyContent: "center",
                  bottom: 5,
                }}
              >
                <Text style={Style.textDrawer}>Bem vindo, João!</Text>
              </View>
            </View>
            <View style={{marginTop: 50,}}/>
            <DrawerItem
              labelStyle={{
                color: "white",
                fontSize: 18,
                fontFamily: "Rubik-Regular",
              }}
              label="EDITAR DADOS"
              onPress={() => {
                props.navigation.navigate("EditarDados");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
                fontSize: 18,
                fontFamily: "Rubik-Regular",
              }}
              label="BUSCAR VAGA"
              onPress={() => {
                props.navigation.navigate("Load");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
                fontSize: 18,
                fontFamily: "Rubik-Regular",
              }}
              label="CONFIGURAÇÕES"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
                fontSize: 18,
                fontFamily: "Rubik-Regular",
              }}
              label="FAVORITOS"
              onPress={() => {
                props.navigation.navigate("Favoritos");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
                fontSize: 18,
                fontFamily: "Rubik-Regular",
              }}
              label="SOBRE"
              onPress={() => {
                props.navigation.navigate("Sobre");
              }}
            />
          </View>
        </DrawerContentScrollView>
      </LinearGradient>
      <View style={{ backgroundColor: "black" }}>
        <DrawerItem
          labelStyle={{ textAlign: "center" , fontFamily: "Rubik-Regular",}}
          label="S A I R    D O    A P P"
          inactiveTintColor="rgb(255,61,23)"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}
