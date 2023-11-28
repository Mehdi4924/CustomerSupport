import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {universalStyles} from '../../Utils/UniversalStyles';
import Header from '../../Components/Header';
import {hp, wp} from '../../Utils/Responsive';
import {colors} from '../../Utils/Colors';
import {customFonts} from '../../Utils/Fonts';
import {allImages} from '../../Utils/Images';
import {Icon} from '@rneui/base';

export default function AllTickets(props) {
  return (
    <View style={universalStyles.containerStyles}>
      <Header navigation={props.navigation} topText={'All Tickets'} leftIcon />
      <View style={styles.parentView}>
        <Text style={styles.welcomeText}>Welcome, Iftikhar</Text>
        <Text style={styles.headerSubText}>
          We are always here to answer your calls
        </Text>
      </View>
      <View style={styles.agentView}>
        <Text style={styles.ticketsHeaderText}>
          Agents Are Online To Answer Your Calls
        </Text>
        <Image
          source={allImages.call}
          style={styles.agentImage}
          resizeMode={'contain'}
        />
      </View>
      <ScrollView horizontal={true} style={styles.scrollViewStyles}>
        <View style={styles.statsMainView}>
          <Icon
            name="phone"
            type="material-community"
            size={hp(4)}
            color={colors.primary}
            style={styles.statsIcon}
          />
          <View>
            <Text style={styles.statValue}>420</Text>
            <Text style={styles.statName}>Total Calls {'\n'}Recieved</Text>
          </View>
        </View>
        <View style={styles.statsMainView}>
          <Icon
            name="face-agent"
            type="material-community"
            size={hp(4)}
            color={colors.primary}
            style={styles.statsIcon}
          />
          <View>
            <Text style={styles.statValue}>50</Text>
            <Text style={styles.statName}>Total Active {'\n'}Agents</Text>
          </View>
        </View>
        <View style={styles.statsMainView}>
          <Icon
            name="ticket-account"
            type="material-community"
            size={hp(4)}
            color={colors.primary}
            style={styles.statsIcon}
          />
          <View>
            <Text style={styles.statValue}>300</Text>
            <Text style={styles.statName}>Tickets{'\n'}Resolved</Text>
          </View>
        </View>
      </ScrollView>
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
  );
}

const styles = StyleSheet.create({
  parentView: {
    width: wp(100),
    backgroundColor: colors.primary,
    paddingHorizontal: wp(5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: hp(2),
  },
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
  agentView: {
    backgroundColor: colors.lightGray,
    width: wp(90),
    height: hp(15),
    marginBottom: hp(1),
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(5),
  },
  agentImage: {
    width: wp(50),
    height: wp(50),
    position: 'absolute',
    right: -wp(4),
    bottom: -hp(3),
  },
  scrollViewStyles: {
    paddingLeft: wp(3),
    marginRight: wp(3),
  },
  statsMainView: {
    width: wp(45),
    height: hp(10),
    borderRadius: 5,
    paddingHorizontal: wp(3),
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: wp(3),
  },
  statsIcon: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 100,
  },
  statValue: {fontFamily: customFonts.Bold, color: colors.white},
  statName: {fontFamily: customFonts.Light, color: colors.black},
  // list styles
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
  ticketsHeaderText: {
    width: wp(35),
    fontFamily: customFonts.Bold,
    color: colors.grey,
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
