import { StyleSheet } from "react-native";
import {SIZES, COLORS, FONTS} from '../constants';
const getFontStyle = (fontType) => {
  const { defaultValue, ...fontStyle } = FONTS[fontType];

  return fontStyle;
}
export default StyleSheet.create({
  containerDraw: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
  },
  topContainerConfirm: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    maxHeight: "35%",
    minHeight: "30%",
    flexDirection: "row",
    flex: 1,
  },
  botContainer: {
    flex: 1,
  },
  textBox: {
    color: "#fff",
    ...getFontStyle("body3"),
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: 40,
    height: 40,
    padding: 10,
  },
  loginText: {
    color: "#fff",
    ...getFontStyle("body3"),

    alignItems: "flex-start",
    marginLeft: 40,
    marginTop: 20,
  },
  swiperText: {
    fontSize: 26,
    color: "#fff",
    textAlign: "left",
    alignSelf: "center",
    marginLeft: 30,
    fontFamily: "Renogare",
  },
  entrarButton: {
    backgroundColor: "#3a3967",
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 45,
    marginHorizontal: 40,
  },
  entrarButtonText: {
    color: "#fff",
    textAlign: "center",
    margin: 10,
  },
  rastreador: {
    color: "#207dd2",
    fontSize: 31,
    marginTop: 0.1,
    textAlign: "center",
    alignSelf: "center",
  },
  mcgt: {
    color: "#f9f9f9",
    ...getFontStyle("h1"),

    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  car: {
    resizeMode: "contain",
    width: 130,
    flexDirection: "row",
  },
  linearGradient: {
    flex: 1,
  },
  linearGradientConfirm: {
    maxHeight: "100%",
    minHeight: "30%",
  },
  wrapper: {},
  swiperLogin: {
    width: "75%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  boxLogin: {
    width: "100%",
    height: '7%',
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxLoginText: {
    color: "#FF311B",
    ...getFontStyle("body3"),

    textAlign: "center",
    fontFamily: "Rubik-Regular",
  },
  boxLoginTextConfirm: {
    color: "#FF311B",
    ...getFontStyle("body3"),

    textAlign: "center",
    opacity: 0.2,
  },
  containerBoxLogin: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  containerBoxLoginBlack: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: 'black'
  },
  boxLoginFacebook: {
    width: "50%",
    height: 50,
    backgroundColor: "#2746E3",
    justifyContent: "center",
  },
  boxLoginGoogle: {
    width: "50%",
    height: 50,
    backgroundColor: "#E32727",
    justifyContent: "center",
  },
  boxLoginFacebookConfirm: {
    width: "50%",
    height: 50,
    backgroundColor: "#2746E3",
    justifyContent: "center",
  },
  boxLoginGoogleConfirm: {
    width: "50%",
    height: 50,
    backgroundColor: "#E32727",
    justifyContent: "center",
  },
  loginSocialText: {
    ...getFontStyle("body4"),

    textAlign: "center",
    color: "#fff",
    fontFamily: "Rubik-Regular",
  },
  loginEntrarText: {
    ...getFontStyle("body4"),

    textAlign: "center",
    color: "#00FF2B",
    fontFamily: "Rubik-Regular",
  },
  boxLeftLoginConfirm: {
    alignSelf: "flex-end",
    width: "50%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    borderRightColor: "#222",
    borderWidth: 1,
  },
  boxRightLoginConfirm: {
    alignSelf: "flex-end",
    width: "50%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  boxLoginConfirm: {
    width: "100%",
    minHeight: '7%',
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  boxLoginConfirmCadastro: {
    width: "100%",
    height: '7%',
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  boxLoginCadastroConfirm: {
    width: "100%",
    height: '7%',
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "center",
  },
  boxFavoritos: {
    width: "100%",
    minHeight: 55,
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  boxSobre: {
    width: "100%",
    minHeight: 50,
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  editarDadosTextBox: {
    width: "100%",
    minHeight: 45,
    backgroundColor: "#000",
    borderTopColor: "#222",
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  codeBox: {
    width: "100%",
    minHeight: 45,
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderTopColor: "#222",
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  boxLoginConfirmModal: {
    width: "100%",
    height: 45,
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#222",
  },
  modalBox: {
    width: "100%",
    height: 45,
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderTopColor: "#222",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  userText: {
    color: "#fff",
    ...getFontStyle("body4"),

    textAlign: "left",
    marginLeft: 12,
    fontFamily: "Rubik-Regular",
    opacity: 0.8,
  },
  codeText: {
    color: "#fff",
    ...getFontStyle("body3"),

    textAlign: "left",
    marginLeft: 28,
    fontFamily: "Rubik-Regular",
  },
  carOption: {
    backgroundColor: "#000",
    width: "33.35%",
    height: '100%',
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#222",
    flex: 1,
  },
  carOption1: {
    backgroundColor: "#000",
    width: "10%",
    height: "100%",
    borderRightWidth: 0.2,
    borderColor: "gray",
    borderBottomWidth: 0.2,
    flexDirection: "row",
    justifyContent: "center",
  },
  carModal: {
    backgroundColor: "#000",
    width: "100%",
    minHeight: 80,
    borderColor: "#222",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  carBmw: {
    resizeMode: "contain",
    width: 100,
    height: 60,
    alignSelf: "center",
  },
  carBmw1: {
    resizeMode: "contain",
    width: 100,
    height: 60,
    marginLeft: 30,
    marginRight: 10,
  },
  carBmwModal: {
    resizeMode: "contain",
    width: 300,
    height: 80,
    alignSelf: "center",
  },
  textCar: {
    color: "white",
    ...getFontStyle("body5"),

    textAlign: "center",
    marginBottom: 2,
    fontFamily: "Rubik-Regular",
  },
  textCar1: {
    color: "white",
    ...getFontStyle("body5"),

    textAlign: "center",
    alignSelf: "center",
    marginLeft: 15,
  },
  blackground: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-around",
  },
  activeBigText: {
    ...getFontStyle("h1"),

    color: "#fff",
    textAlign: "center",
    marginHorizontal: 100,
    fontFamily: "Rubik-Bold",
  },
  activeSmallText: {
    ...getFontStyle("h3"),

    color: "#fff",
    textAlign: "center",
    marginHorizontal: 100,
    fontFamily: "Rubik-Regular",
    marginBottom: 40,
  },
  btnVerde: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  localActive: {
    width: "100%",
    backgroundColor: "#ff1d21",
    height: '7%',
    marginBottom: 40,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  localActiveText: {
    ...getFontStyle("body4"),

    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Rubik-Regular",
  },
  buscarSmallText: {
    ...getFontStyle("h3"),

    color: "#fff",
    textAlign: "center",
    marginHorizontal: 50,
    marginBottom: 30,
    fontFamily: "Rubik-Bold",
  },
  buscarBigText: {
    ...getFontStyle("h1"),

    color: "#fff",
    textAlign: "center",
    marginHorizontal: 70,
    fontFamily: "Rubik-Regular",
  },
  primeiraRoda: {
    borderRadius: 200,
    backgroundColor: "#005299",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
    marginTop: 60,
  },
  segundaRoda: {
    position: "absolute",
    backgroundColor: "#007eeb",
    borderRadius: 200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
  },
  terceiraRoda: {
    position: "absolute",
    borderRadius: 200,
    backgroundColor: "#0088ff",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  loadText: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Rubik-Regular",
  },
  headerGps: {
    width: "85%",
    height: '8%',
    backgroundColor: "black",
    alignSelf: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  headerEditar: {
    width: "85%",
    height: "8%",
    backgroundColor: "black",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  textGps: {
    ...getFontStyle("h3"),

    color: "white",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "Renogare",
  },
  textDrawer: {
    ...getFontStyle("h3"),

    color: "white",
    textAlign: "center",
    fontFamily: "Renogare",
  },
  boxGps: {
    width: "100%",
    height: 55,
    backgroundColor: "#000",
    borderBottomColor: "#111",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBoxTop: {
    ...getFontStyle("body3"),

    color: "#00d123",
    textAlign: "center",
    fontFamily: "Rubik-Regular",
  },
  textBoxBot: {
    ...getFontStyle("body3"),

    color: "red",
    textAlign: "center",
    fontFamily: "Rubik-Regular",
  },
  voltarBox: {
    height: 50,
    width: "100%",
    backgroundColor: "#00d123",
    justifyContent: "center",
  },
  deletarBox: {
    height: 50,
    width: "50%",
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
  },
  textVoltar: {
    color: "#fff",
    ...getFontStyle("body3"),

    textAlign: "center",
    fontFamily: "Rubik-Regular",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    backgroundColor: "black",
    width: "100%",
    height: 470,
    position: "absolute",
    borderTopColor: "#222",
    borderWidth: 1,
  },
  centeredViewFav: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalViewFav: {
    backgroundColor: "black",
    width: "100%",
    height: 490,
    position: "absolute",
    borderTopColor: "#222",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0087ff",
    borderRadius: 40,
    width: 37,
    height: 37,
    alignSelf: "flex-end",
    marginRight: 30,
  },
  buttonFav: {
    backgroundColor: "#0087ff",
    borderRadius: 40,
    width: 30,
    height: 30,
    marginRight: 30,
  },
  buttonOpen: {
    backgroundColor: "#0087ff",
    zIndex: 1,
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#0087ff",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  topModalText: {
    color: "white",
    marginVertical: 30,
    textAlign: "center",
    fontSize: 26,
    fontFamily: "Rubik-Regular",
    alignSelf: "center",
    flex: 1,
  },
  topModalTextFav: {
    color: "white",
    marginVertical: 30,
    textAlign: "center",
    fontSize: 26,
    fontFamily: "Rubik-Regular",
    alignSelf: "center",
    flex: 1,
    marginLeft: "15%",
  },
  topModalTextGps: {
    color: "white",
    marginTop: 15,
    textAlign: "center",
    ...getFontStyle("h1"),
    fontFamily: "Rubik-Bold",
    alignSelf: "center",
  },
  topModalTextGps1: {
    color: "white",
    textAlign: "center",
    ...getFontStyle("h1"),
    fontFamily: "Rubik-Bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  botModalText: {
    color: "white",
    marginTop: 20,
    marginBottom: 80,
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    ...getFontStyle("body3"),

  },
  editarDados: {
    backgroundColor: "black",
    width: "100%",
    height: 55,
    justifyContent: "center",
  },
  textSettings: {
    color: "white",
    ...getFontStyle("body4"),

    textAlign: "left",
    marginLeft: 30,
    marginTop: "10%",
    fontFamily: "Rubik-Regular",
  },
  textSettingsTop: {
    ...getFontStyle("h1"),
    color: "white",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 30,
    fontFamily: "Renogare",
  },
  textSobreTop: {
    ...getFontStyle("h1"),
    color: "white",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 70,
    fontFamily: "Renogare",
  },
  switchBtn: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 20,
  },
  voltarBoxCode: {
    height: 55,
    width: "100%",
    backgroundColor: "#0da500",
    justifyContent: "center",
  },
  textFavoritosTop: {
    ...getFontStyle("body4"),

    color: "white",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "Rubik-Regular",
  },
  textFoto: {
    ...getFontStyle("body5"),

    color: "white",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 15,
    fontFamily: "Rubik-Regular",
  },
  textFotoTop: {
    ...getFontStyle("h1"),
    color: "white",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 60,
    fontFamily: "Renogare",
  },
  cameraBox: {
    marginHorizontal: 15,
    width: "85%",
    height: '45%',
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  tirarFotoBox: {
    width: "50%",
    height: 45,
    backgroundColor: "#0da500",
    justifyContent: "center",
  },
  buscarBox: {
    width: "50%",
    height: 45,
    backgroundColor: "#0087ff",
    justifyContent: "center",
  },
  concluirBox: {
    width: "100%",
    height: 45,
    backgroundColor: "#ff1d21",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  concluirBoxEditar: {
    width: "100%",
    height: 45,
    backgroundColor: "#0087ff",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  blackgroundFoto: {
    backgroundColor: "#000",
    flex: 1,
  },
  concluirText: {
    textAlign: "center",
    color: "black",
    fontFamily: "Rubik-Regular",
    ...getFontStyle("body3"),

  },
  boxUp: {
    textAlign: "center",
    color: "white",
    fontFamily: "Rubik-Regular",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    ...getFontStyle("body3"),

    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    ...getFontStyle("body4"),

    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  modalFavoritoText: {
    color: "white",
    ...getFontStyle("h4"),

    fontFamily: "Renogare",
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 8,
  },
  modalFavoritoSmallText: {
    color: "white",
    ...getFontStyle("body4"),

    fontFamily: "Renogare",
    marginLeft: 30,
  },
  checkTextLeft: {
    color: "white",
    fontFamily: "Renogare",
    ...getFontStyle("body4"),

    alignSelf: "center",
    textAlign: "center",
    marginRight: "5%",
    bottom: 8,
  },
  checkTextRight: {
    color: "white",
    fontFamily: "Renogare",
    ...getFontStyle("body4"),

    alignSelf: "center",
    textAlign: "center",
    bottom: 8,
    maxWidth: "35%",
  },
  checkTextBottom: {
    color: "white",
    fontFamily: "Renogare",
    ...getFontStyle("body4"),

    alignSelf: "center",
    textAlign: "center",
    bottom: 8,
    maxWidth: "75%",
    marginRight: 30,
  },
  btnReservar: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderColor: "#333",
    borderTopWidth: 0.8,
    justifyContent: "center",
  },
  btnCancelar: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderColor: "#333",
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
    justifyContent: "center",
  },
  textReservarMap: {
    color: "#fff",
    fontFamily: "Rubik-Regular",
    ...getFontStyle("h4"),

    textAlign: "center",
  },
  textReservar: {
    color: "#00d123",
    fontFamily: "Rubik-Regular",
    ...getFontStyle("h4"),

    textAlign: "center",
  },
  textCancelar: {
    color: "rgb(241,47,26)",
    fontFamily: "Rubik-Regular",
    ...getFontStyle("h4"),

    textAlign: "center",
  },
  gpsBtnVerde: {
    width: 40,
    height: 40,
    backgroundColor: "#2ecc71",
    borderRadius: 40,
    zIndex: 1,
    justifyContent: "center",
  },
  gpsBtnVermelho: {
    width: 40,
    height: 40,
     zIndex: 1,
    backgroundColor: "#e20304",
    alignSelf: "center",
    borderRadius: 40,
    justifyContent: "center",
  },
  gpsBtnAzul: {
    width: 40,
    height: 40,
    backgroundColor: "#0087ff",
    borderRadius: 60,
    zIndex: 1,
    justifyContent: "center",
  },
  gpsBtnAzulFake: {
    width: 40,
    height: 40,
    backgroundColor: "#0087ff",
    borderRadius: 40,
    zIndex: 1,
    justifyContent: "center",
  },
  textBtnGps: {
    ...getFontStyle("h4"),

    textAlign: "center",
    color: "#fff",
    fontFamily: "Rubik-Regular",
  },
  textModalGps: {
    fontFamily: "Rubik-Bold",
    ...getFontStyle("body3"),

    textAlign: "left",
    marginLeft: 15,
    marginTop: 20,
    color: "#fff",
  },
  textModalGps1: {
    fontFamily: "Rubik-Bold",
    ...getFontStyle("body3"),

    textAlign: "left",
    marginLeft: 24,
    color: "#fff",
  },
  swiperGps: {
    width: "100%",
    height: "100%",
  },
  swiperGpsText: {
    fontSize: 32,
    color: "#fff",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 15,
    fontFamily: "Renogare",
  },
  textModal: {
    color: "#fff",
    fontFamily: "Rubik-Regular",
    textAlign: "right",
    marginRight: 10,
    marginBottom: 30,
    ...getFontStyle("body3"),


  },
  viewGpsModal:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: 60,
  },
  blackBarGps:{
    width: '100%',
    height: 75,
    alignSelf: 'flex-start'
  },
  modalParabens:{
    fontFamily: "Rubik-Bold",
    fontSize: 36,
    textAlign: 'center',
    color: 'white',

  },
  modalVaga:{
    fontFamily: "Rubik-Bold",
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginTop: 40,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: '100%',
    width: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    top: 28,
  },
  titleText: {
    ...getFontStyle("h2"),

    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyleCam: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
});
