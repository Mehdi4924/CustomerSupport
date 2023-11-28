import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import {customFonts} from '../Utils/Fonts';
export default function CustomButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[styles.buttonStyles, props.buttonStyles]}
      onPress={props.onPress}
      disabled={props.disabled || props.isLoading}>
      {props.icon ? (
        <Image
          source={props.imageSource}
          style={{width: 20, height: 20, marginRight: wp(2)}}
        />
      ) : null}
      {props.isLoading ? (
        <ActivityIndicator size={'small'} color={colors.secondary} />
      ) : (
        <Text style={[styles.textStyles, props.textStyles]}>{props.name}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: colors.white,
    width: wp(90),
    flexDirection: 'row',
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.grey,
  },
  textStyles: {
    color: colors.primary,
    fontFamily: customFonts.Bold,
    fontSize: hp(2),
  },
});
