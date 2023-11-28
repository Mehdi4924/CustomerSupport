import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {hp, wp} from '../Utils/Responsive';
import {colors} from '../Utils/Colors';
import {customFonts} from '../Utils/Fonts';
const CustomDropdown = props => {
  const [value, setValue] = useState(null);
  return (
    <View style={[styles.container, props.container]}>
      <Dropdown
        style={[styles.dropdown, props.dropdown]}
        placeholderStyle={[styles.placeholderStyle, props.placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, props.selectedTextStyle]}
        inputSearchStyle={[styles.inputSearchStyle, props.inputSearchStyle]}
        iconStyle={[styles.iconStyle, props.iconStyle]}
        itemTextStyle={[styles.itemTextStyle, props.itemTextStyle]}
        data={props.data}
        search
        maxHeight={300}
        labelField={props.labelField}
        valueField={props.valueField}
        placeholder={props.placeholder}
        searchPlaceholder="Search..."
        value={props.value}
        onChange={props.onChange}
        renderLeftIcon={() => null}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: wp(88),
    backgroundColor: colors.white,
  },
  dropdown: {
    height: hp(6.5),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: hp(1),
    color: colors.black,
    paddingRight: wp(3.5),
    paddingLeft: wp(1.5),
    // paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: hp(1.8),
    color: colors.grey,
    fontFamily: customFonts.Bold,
    marginLeft: hp(1),
  },
  selectedTextStyle: {
    fontSize: hp(1.8),
    fontFamily: customFonts.Bold,
    color: colors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: hp(5),
    color: colors.grey,
    fontSize: 16,
    fontFamily: customFonts.Light,
  },
  itemTextStyle: {
    fontSize: hp(1.8),
    color: colors.black,
    fontFamily: customFonts.Light,
  },
});
