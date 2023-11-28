import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from './Colors';
import {wp} from './Responsive';

export const universalStyles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: wp(2),
  },
});
