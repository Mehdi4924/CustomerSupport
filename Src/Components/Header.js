import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import {Icon} from '@rneui/base';
import {customFonts} from '../Utils/Fonts';

export default function Header(props) {
  const navigation = props.navigation;
  return (
    <View style={[styles.container, props.headerContainer]}>
      {props.leftIcon ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type="material-community"
            name="arrow-left-thick"
            size={hp(3)}
            color={colors.white}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={[styles.text, props.middleText]}>
        {props?.topText || ''}
      </Text>
      {props.rightIcon ? (
        <TouchableOpacity onPress={() => props.OnRightIconPress()}>
          <Icon
            name="logout"
            type="material-community"
            size={hp(3)}
            color={colors.white}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: colors.primary,
    height: hp(7),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  text: {
    fontFamily: customFonts.Bold,
    color: colors.white,
    fontSize: 16,
  },
});
