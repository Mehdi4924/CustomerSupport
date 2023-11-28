import React, {useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {universalStyles} from '../../Utils/UniversalStyles';
import {allImages} from '../../Utils/Images';
import {hp} from '../../Utils/Responsive';
import {Icon} from '@rneui/base';
import {customFonts} from '../../Utils/Fonts';
import {colors} from '../../Utils/Colors';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 2000);
  }, []);
  const spinValue = new Animated.Value(0);
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={[universalStyles.containerStyles, {justifyContent: 'center'}]}>
      <Text style={styles.topText}>Customer Support</Text>
      <Animated.Image
        source={allImages.SplashImage}
        style={{
          height: hp(30),
          alignSelf: 'center',
          transform: [
            {
              scale: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          position: 'absolute',
          bottom: hp(2),
          fontFamily: customFonts.Bold,
        }}>
        Customer Support By NKU Technologies
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topText: {
    position: 'absolute',
    top: hp(10),
    fontFamily: customFonts.Bold,
    color: colors.primary,
    fontSize: hp(2.5),
  },
});
