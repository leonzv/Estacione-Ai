import React, {useContext} from 'react';
import {Text} from 'react-native';
import {FontContext} from '../contexts/FontContext';

export function CustomText({children, fontType, style}) {
    const {FONTS} = useContext(FontContext);
    let styles = {};
    if (FONTS && FONTS.hasOwnProperty(fontType)) {
        const { defaultValue, ...fontStyle } = FONTS[fontType];
        styles = { ...style, ...fontStyle };
      } else {
        styles = { ...style };
      }
    
      return (
        <Text style={{ ...styles }}>
          { children}
        </Text>
      )
}

export default CustomText;
