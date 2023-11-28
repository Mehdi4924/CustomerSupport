import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../../Utils/Responsive';
import {customFonts} from '../../Utils/Fonts';
import {colors} from '../../Utils/Colors';
import {universalStyles} from '../../Utils/UniversalStyles';
import Header from '../../Components/Header';
import {allImages} from '../../Utils/Images';
import CustomTextInput from '../../Components/CustomTextInputs';

export default function Signup(props) {
  const [data, setData] = useState({
    password: '',
    email: '',
    name: '',
    contactNumber: '',
  });
  const [secureEntry, setSecureEntry] = useState(true);
  const spinValue = new Animated.Value(0);
  Animated.spring(spinValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[universalStyles.containerStyles, {height: hp(100)}]}>
          <Header navigation={props.navigation} topText={'Sign Up'} leftIcon />
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
          <Text style={styles.welcomeText}>Welcome To Our Portal</Text>
          <Text style={styles.loginText}>
            Add Your Credentials And Get In Touch {'\n'} With Us
          </Text>
          <CustomTextInput
            value={data.name}
            onChangeText={t =>
              setData(prev => {
                return {...prev, name: t};
              })
            }
            placeholder="Name"
            leftIconName={'account'}
            contextMenuHidden={true}
            leftIcon
            keyboardType="default"
          />
          <CustomTextInput
            value={data.contactNumber}
            onChangeText={t =>
              setData(prev => {
                return {...prev, contactNumber: t};
              })
            }
            placeholder="Contact Number"
            leftIconName={'phone'}
            contextMenuHidden={true}
            leftIcon
            keyboardType="default"
          />
          <CustomTextInput
            value={data.email}
            onChangeText={t =>
              setData(prev => {
                return {...prev, email: t};
              })
            }
            placeholder="Email"
            leftIconName={'email'}
            contextMenuHidden={true}
            leftIcon
            keyboardType="default"
          />
          <CustomTextInput
            value={data.password}
            onChangeText={t =>
              setData(prev => {
                return {...prev, password: t};
              })
            }
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
            style={styles.bottomTextView}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>
              Already Have An Account?{' '}
              <Text style={styles.resetText}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
