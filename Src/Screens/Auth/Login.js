import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import CustomTextInput from '../../Components/CustomTextInputs';
import CustomButton from '../../Components/CustomButton';
import {hp, wp} from '../../Utils/Responsive';
import {customFonts} from '../../Utils/Fonts';
import {colors} from '../../Utils/Colors';
import {universalStyles} from '../../Utils/UniversalStyles';
import {allImages} from '../../Utils/Images';

export default function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [secureEntry, setSecureEntry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const spinValue = new Animated.Value(0);
  Animated.spring(spinValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={universalStyles.containerStyles}>
      <Header navigation={props.navigation} topText={'Login'} />
      <Animated.Image
        source={allImages.logo}
        style={{
          height: hp(10),
          marginTop: hp(10),
          alignSelf: 'center',
          transform: [
            {
              translateX: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-wp(70), 1],
              }),
            },
          ],
        }}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.loginText}>
        Login Using Your Credentials To Get In Contact With Us
      </Text>
      <CustomTextInput
        value={email}
        onChangeText={t => setEmail(t)}
        placeholder="Email"
        leftIconName={'email'}
        contextMenuHidden={true}
        leftIcon
        keyboardType="default"
      />
      <CustomTextInput
        value={password}
        onChangeText={t => setPassword(t)}
        placeholder="Password"
        leftIconName={'lock-check'}
        iconName={'eye'}
        contextMenuHidden={true}
        textInputStyles={{width: wp(68)}}
        leftIcon
        keyboardType="default"
        secureTextEntry={secureEntry}
        icon
        onPress={() => setSecureEntry(!secureEntry)}
      />
      <TouchableOpacity
        onPress={() => props.navigation.replace('SupportStack')}>
        <Text style={styles.loginText}>
          Forgot Password? <Text style={styles.resetText}>Reset Password</Text>
        </Text>
      </TouchableOpacity>
      <CustomButton
        isLoading={isLoading}
        name={'Login'}
        onPress={() => props.navigation.replace('UserStack')}
      />
      {/* <TouchableOpacity
        style={styles.bottomTextView}
        onPress={() => props.navigation.navigate('Signup')}>
        <Text style={styles.loginText}>
          Don't Have An Account? <Text style={styles.resetText}>Signup</Text>
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: customFonts.Bold,
    color: colors.secondary,
    fontSize: 20,
  },
  loginText: {
    fontFamily: customFonts.Bold,
    color: colors.grey,
    fontSize: 14,
    marginVertical: hp(2),
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontFamily: customFonts.Bold,
    color: colors.secondary,
    fontSize: 14,
  },
  bottomTextView: {position: 'absolute', bottom: hp(1)},
});
