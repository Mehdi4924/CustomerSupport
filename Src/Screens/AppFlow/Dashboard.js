import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {universalStyles} from '../../Utils/UniversalStyles';
import Header from '../../Components/Header';
import {hp, wp} from '../../Utils/Responsive';
import {colors} from '../../Utils/Colors';
import {customFonts} from '../../Utils/Fonts';
import CustomTextInput from '../../Components/CustomTextInputs';
import {FlatList} from 'react-native';
import {Icon} from '@rneui/base';
import {allImages} from '../../Utils/Images';

export default function Dashboard(props) {
  const [search, setSearch] = useState('');
  const spinValue = new Animated.Value(0);
  return (
    <View style={{flex: 1}}>
      <Header
        navigation={props.navigation}
        topText={'Dashboard'}
        rightIcon
        OnRightIconPress={() => null}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[universalStyles.containerStyles, {height: hp(100)}]}>
          <View style={styles.parentView}>
            <Text style={styles.welcomeText}>Welcome, Iftikhar</Text>
            <Text style={styles.headerSubText}>
              We are always here to answer your calls
            </Text>
            <View style={styles.topButtons}>
              <Animated.View
                style={[
                  styles.animationText,
                  {
                    transform: [
                      {
                        translateX: spinValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, wp(45)],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <TouchableOpacity
                style={styles.pendingView}
                onPress={() => {
                  Animated.spring(spinValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                }}>
                <Text style={styles.pendingText}>Pending Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.resolvedView}
                onPress={() => {
                  Animated.spring(spinValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                }}>
                <Text style={styles.resolvedText}>Resolved Tickets</Text>
              </TouchableOpacity>
            </View>
            <CustomTextInput
              value={search}
              onChangeText={t => setSearch(t)}
              placeholder="Search Ticket"
              leftIconName={'text-search'}
              iconName={'close-circle'}
              contextMenuHidden={true}
              mainView={{marginTop: 5, marginBottom: hp(2), width: wp(90)}}
              textInputStyles={{width: wp(72)}}
              leftIcon
              keyboardType="default"
              secureTextEntry={false}
              icon
              onPress={() => setSearch('')}
            />
          </View>
          <View style={styles.listHeaderView}>
            <Text style={styles.ticketsHeaderText}>Tickets</Text>
            <TouchableOpacity
              style={styles.headerIconView}
              onPress={() => props.navigation.navigate('AppFlowStack')}>
              <Icon
                type="material-community"
                name="arrow-right-thick"
                size={hp(2)}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['a', 'a', 'a', 'a', 'a']}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.listParentContainer}
                  onPress={() =>
                    props.navigation.navigate('AppFlowStack', {
                      screen: 'TicketDetails',
                    })
                  }>
                  <View style={styles.listSubContainer}>
                    <Text style={styles.ticketNoText}>Ticket 12345</Text>
                    <Text style={styles.severityText}>Critical</Text>
                  </View>
                  <View style={styles.listSubContainer}>
                    <Text style={styles.dateText}>Created On: 12,Jan 2023</Text>
                    <Text style={styles.phoneNumberText}>030303030303</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: customFonts.Bold,
    color: colors.secondary,
    fontSize: 16,
  },
  headerSubText: {
    fontFamily: customFonts.Light,
    color: colors.white,
    fontSize: 12,
  },
  topButtons: {
    backgroundColor: colors.white,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: hp(2),
  },
  animationText: {
    backgroundColor: colors.secondary,
    width: wp(45),
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  parentView: {
    width: wp(100),
    backgroundColor: colors.primary,
    paddingHorizontal: wp(5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pendingView: {
    width: wp(45),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resolvedView: {
    width: wp(45),
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingText: {
    fontFamily: customFonts.Light,
    color: colors.black,
    fontSize: hp(2),
  },
  resolvedText: {
    fontFamily: customFonts.Light,
    color: colors.black,
    fontSize: hp(2),
  },
  //list styles
  listParentContainer: {
    width: wp(90),
    backgroundColor: colors.white,
    marginVertical: hp(0.5),
    borderRadius: 5,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },

  ticketNoText: {
    fontFamily: customFonts.Bold,
    color: colors.black,
  },
  severityText: {
    paddingVertical: hp(0.2),
    paddingHorizontal: wp(1.5),
    color: colors.white,
    backgroundColor: colors.primary,
    borderRadius: 5,
    fontFamily: customFonts.Light,
  },
  listHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
    width: wp(90),
    alignItems: 'center',
  },
  ticketsHeaderText: {
    width: wp(35),
    fontFamily: customFonts.Bold,
    color: colors.grey,
  },
  headerIconView: {
    borderRadius: 20,
    backgroundColor: colors.secondary,
    width: wp(7),
    height: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(0.5),
  },
  dateText: {
    fontFamily: customFonts.Bold,
    color: colors.secondary,
    fontSize: 12,
  },
  phoneNumberText: {
    fontFamily: customFonts.Light,
    color: colors.grey,
    fontSize: 12,
  },
});
