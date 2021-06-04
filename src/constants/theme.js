import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#FF311B', // laranja
  secondary: '#000', // preto

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  defaultValue: 0,
  h1: 28,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontSize: SIZES.h1, lineHeight: 36, defaultValue: 28},
  h2: {fontSize: SIZES.h2, lineHeight: 30, defaultValue: 22},
  h3: {fontSize: SIZES.h3, lineHeight: 22, defaultValue: 20},
  h4: {fontSize: SIZES.h4, lineHeight: 22, defaultValue: 18},
  body1: {fontSize: SIZES.body1, lineHeight: 36, defaultValue: 30},
  body2: {fontSize: SIZES.body2, lineHeight: 30, defaultValue: 20},
  body3: {fontSize: SIZES.body3, lineHeight: 22, defaultValue: 16},
  body4: {fontSize: SIZES.body4, lineHeight: 22, defaultValue: 14},
  body5: {fontSize: SIZES.body5, lineHeight: 22, defaultValue: 12},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
