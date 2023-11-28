import {
  Animated,
  Image,
  Modal,
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

export default function SupportDashboard(props) {
  const [search, setSearch] = useState('');
  const [filterModal, setFilterModal] = useState(false);
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
            <Text style={styles.welcomeText}>Welcome, Ahmed</Text>
            <Text style={styles.headerSubText}>
              Please Have A Look At Tickets And Respond On Them
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomTextInput
                value={search}
                onChangeText={t => setSearch(t)}
                placeholder="Search Ticket"
                leftIconName={'text-search'}
                iconName={'close-circle'}
                contextMenuHidden={true}
                mainView={{
                  marginVertical: hp(2),
                  width: wp(80),
                }}
                textInputStyles={{width: wp(62)}}
                leftIcon
                keyboardType="default"
                secureTextEntry={false}
                icon
                onPress={() => setSearch('')}
              />
              <TouchableOpacity onPress={() => setFilterModal(!filterModal)}>
                <Icon
                  name="filter-check-outline"
                  type="material-community"
                  size={hp(4)}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
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
                    props.navigation.navigate('SupportStack', {
                      screen: 'SupportTicketDetails',
                    })
                  }>
                  <View style={styles.listSubContainer}>
                    <Text style={styles.ticketNoText}>Iftikhar Mehdi</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModal}
        onRequestClose={() => null}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setFilterModal(!filterModal)}
          />
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sort Items By</Text>
            <TouchableOpacity
              style={styles.sortingItem}
              onPress={() => setFilterModal(!filterModal)}>
              <Text style={styles.modalSubText}>Time Posted</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortingItem}
              onPress={() => setFilterModal(!filterModal)}>
              <Text style={styles.modalSubText}>Recently Updated</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortingItem}
              onPress={() => setFilterModal(!filterModal)}>
              <Text style={styles.modalSubText}>Closed Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortingItem}
              onPress={() => setFilterModal(!filterModal)}>
              <Text style={styles.modalSubText}>Open Tickets</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  parentView: {
    width: wp(100),
    backgroundColor: colors.primary,
    paddingHorizontal: wp(5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    fontFamily: customFonts.Bold,
    color: colors.secondary,
    fontSize: hp(2.2),
  },
  sortingItem: {
    backgroundColor: colors.lightGray,
    padding: 5,
    borderRadius: 5,
    marginTop: hp(1),
  },
  modalSubText: {
    fontFamily: customFonts.Light,
    color: colors.black,
    fontSize: hp(1.8),
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
