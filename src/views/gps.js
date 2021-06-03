import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Style from '../style/style.js';
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Swiper from "react-native-swiper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {FONTS, COLORS, SIZES, icons} from '../constants';
const Gps = ({route, navigation}) => {
  const GOOGLE_API_KEY = 'AIzaSyDaJUFUIRPgP0kPOCF350ZOqPoYmPxrZ-w';
  var mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          color: '#757575',
        },
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181818',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1b1b1b',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#2c2c2c',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8a8a8a',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#373737',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3c3c3c',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3d3d3d',
        },
      ],
    },
  ];
  const mapView = React.useRef();
  function switchModal() {
    if (modalVisible == true) {
      setModalVisible(!modalVisible);
      setModalVisible1(!modalVisible1);
    }
  }
  function switchModal1() {
    if (modalVisible1 == true) {
      setModalVisible1(!modalVisible1);
      setModalVisible2(!modalVisible2);
    }
  }
  if(check1 && check == true){
    alert("Apenas um pode ser selecionado")
  }
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [region, setRegion] = React.useState(mapRegion);
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  const currentLocation = {
    streetName: 'Star Park',
    gps: {
      latitude: -23.5489,
      longitude: -46.6382,
    },
  };
  const vaga = {
    gps: {
      latitude: -23.5496,
      longitude: -46.6333,
    },
  };
  const blue = {
    gps: {
      latitude: -23.5476,
      longitude: -46.6363,
    },
  };
  const red = {
    gps: {
      latitude: -23.5474,
      longitude: -46.6333,
    },
  };
  function modalOpen(){
    return(
      setModalVisible(true)
    );
  };
  const fromLoc = currentLocation.gps;
  const toLoc = vaga.gps;
  const street = currentLocation.streetName;
  const blueLoc = blue.gps;
  const redLoc = red.gps;

  const mapRegion = {
    latitude: (fromLoc.latitude + toLoc.latitude) / 2,
    longitude: (fromLoc.longitude + toLoc.longitude) / 2,
    latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
    longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
  };

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLoc}
      onPress={modalOpen}
      >
        <View style={Style.gpsBtnAzul}>
          <Text style={Style.textBtnGps}> 15 </Text>
        </View>    
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLoc}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
      >
        <Image
          source={icons.car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );
    const redIcon = () => (
      <Marker
        coordinate={redLoc}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
        onPress={modalOpen}
      >
        <View style={Style.gpsBtnVermelho}>
          <Text style={Style.textBtnGps}> 25 </Text>
        </View> 
      </Marker>
    );
    const blueIcon = () => (
      <Marker
        coordinate={blueLoc}
        onPress={modalOpen}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
      >
      <View style={Style.gpsBtnVerde}>
          <Text style={Style.textBtnGps}> 20 </Text>
        </View> 
      </Marker>
    );
    return (
      <View style={{flex: 1}}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{height: '100%', width: '100%'}}
          customMapStyle={mapStyle}
        >
          <MapViewDirections
            origin={fromLoc}
            destination={toLoc}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {carIcon()}
          {blueIcon()}
          {redIcon()}
        </MapView>
        <View style={Style.mapDrawerOverlay} />
        <View style={Style.headerGps}>
          <Text style={Style.textGps}>Bem vindo, João!</Text>
        </View>
        <View style={{flex: 1}}>
        <View>
      <View>
        <TouchableOpacity
          style={[Style.gpsBtnAzulFake, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
        <Text style={Style.textBtnGps}>15</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ width: "50%", height: "100%" }}>
                <Text style={Style.textModalGps}> Serviços: </Text>
                <Text style={Style.textModalGps}> -Estacionamento </Text>
                <Text style={Style.textModalGps}> -Lava Rápido </Text>
              </View>
              <View
                style={{
                  height: "141%",
                  width: 1,
                  top: 50,
                  backgroundColor: "#333",
                  alignSelf: "center",
                }}
              />
              <View style={{ width: "50%", height: "100%" }}>
                <Text style={Style.textModalGps}> Preços: </Text>
                <Swiper
                  style={Style.wrapper}
                  loop={false}
                  paginationStyle={{right: 80}}
                  activeDotColor="rgb(255,255,255)"
                  dotColor="rgba(255,255,255,0.5)"
                  dotStyle={{ width: 30, height: 6, marginHorizontal: 10 }}
                  activeDotStyle={{
                    width: 50,
                    height: 6,
                    marginHorizontal: 10,
                  }}
                >
                  <View style={Style.swiperGps}>
                    <Text style={Style.swiperGpsText}>R$ 20,00</Text>
                    <Text style={Style.textModalGps1}>Por apenas 1 hora</Text>
                  </View>
                  <View style={Style.swiperGps}>
                    <Text style={Style.swiperGpsText}>R$ 40,00</Text>
                    <Text style={Style.textModalGps1}>Por apenas 2 horas</Text>
                  </View>
                </Swiper>
                <View style={Style.viewGpsModal}>
                <Text style={Style.textModal}>Favoritar</Text>
                <Image style={{resizeMode: 'contain', width: 50, marginRight: 30,}} source={require("../assets/img/estrela.png")} />
                </View>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => switchModal()}>
                <Text style={Style.textReservarMap}>
                  {" "}
                  R E S E R V A R   V A G A{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => setModalVisible(false)}>
                <Text style={Style.textReservar}> F E C H A R </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnCancelar}>
                <Text style={Style.textCancelar}>S A I R   D O   A P P </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
      {/*fim do primeiro modal*/}
      <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible(!modalVisible1);
        }}
      >
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>
            
              <Text style={Style.topModalTextGps}>Você escolheu:</Text>
              <Text style={Style.topModalTextGps1}>Star Park</Text>
           
            <View style={{alignItems: 'center'}}>
              <Text style={Style.modalFavoritoText}> Endereço: </Text>
              <Text style={Style.modalFavoritoSmallText}>
                {" "}
                Avenida São João, 1460
              </Text>
              <Text style={Style.modalFavoritoSmallText}> São Paulo, SP</Text>
              <Text style={Style.modalFavoritoText}>
                {" "}
                Formas de pagamento:{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
              <BouncyCheckbox
                size={28}
                fillColor="#0087ff"
                unfillColor="black"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                }}
                onPress={(newValue) => setCheck(newValue)}
              />
              <Text style={Style.checkTextLeft}>Dinheiro</Text>
              <BouncyCheckbox
                size={28}
                fillColor="#0087ff"
                unfillColor="black"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                }}
                onPress={(newValue) => setCheck1(newValue)}
              />
              <Text style={Style.checkTextRight}>
                Cartão de crédito ou débito
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
              <BouncyCheckbox
                size={22}
                fillColor="#0087ff"
                unfillColor="white"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                  borderRadius: 0,
                }}
                onPress={(newValue) => setCheck2(newValue)}
              />
              <Text style={Style.checkTextBottom}>
                Repetir o mesmo processo nas próximos vezes
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => switchModal1()}>
                <Text style={Style.textReservar}> R E S E R V A R   V A G A  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnCancelar}
              onPress={() => setModalVisible1(false)}>
                <Text style={Style.textCancelar}> C A N C E L A R </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
      {/*fim do segundo modal*/}
      <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible(!modalVisible2);
        }}
      >
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>           
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,}}>
              <Text style={Style.modalParabens}>Parabéns!</Text>           
              <Image
                    style={{
                      width: 120,
                      height: 120,
                      alignSelf: "center",
                      resizeMode: "contain",
                      marginTop: 40,
                    }}
                    source={require("../assets/img/btnVerde.png")}
                  />                      
              <Text style={Style.modalVaga}>Você reservou sua vaga.</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnCancelar}
              onPress={() => setModalVisible2(false)}>
                <Text style={Style.textCancelar}> F E C H A R </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
    </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={Style.boxGps}
              onPress={() => this.props.navigation.navigate('Load')}
            >
              <Text style={Style.textBoxTop}>
                B U S C A R  N O V A M E N T E
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.boxGps}
              onPress={() => navigation.navigate('EditarDados')}
            >
              <Text style={Style.textBoxBot}>S A I R  D O  A P P</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={'../assets/img/marker.png'}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />

          <View style={{flex: 1}}>
            <Text style={{...FONTS.body3}}>{street}</Text>
          </View>

          <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {renderMap()}
      {renderDestinationHeader()}
    </View>
  );
};

export default Gps;
