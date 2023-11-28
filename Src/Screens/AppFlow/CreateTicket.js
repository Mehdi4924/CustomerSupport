import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {universalStyles} from '../../Utils/UniversalStyles';
import {hp, wp} from '../../Utils/Responsive';
import {customFonts} from '../../Utils/Fonts';
import {colors} from '../../Utils/Colors';
import CustomTextInput from '../../Components/CustomTextInputs';
import CustomDropdown from '../../Components/CustomDropdown';
import {Icon} from '@rneui/base';
import CustomButton from '../../Components/CustomButton';
import DocumentPicker, {
  types,
  isInProgress,
} from 'react-native-document-picker';

export default function CreateTicket(props) {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketPriority, setTicketPriority] = useState({});
  const [tickeStatus, setTickeStatus] = useState({});
  const [attachment, setAttachment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  return (
    <View style={{flex: 1}}>
      <Header navigation={props.navigation} topText={'Create Ticket'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[universalStyles.containerStyles, {height: hp(100)}]}>
          <Text style={styles.createText}>
            Create Ticket And Customer Support Will {'\n'}Get Back To You ASAP.
          </Text>
          <Text style={styles.inputTopText}>Ticket Subject</Text>
          <CustomTextInput
            value={ticketSubject}
            onChangeText={t => setTicketSubject(t)}
            placeholder="Subject"
            leftIconName={'ticket'}
            contextMenuHidden={true}
            leftIcon
            keyboardType="default"
          />
          <Text style={styles.inputTopText}>Ticket Details</Text>
          <CustomTextInput
            value={ticketDetails}
            onChangeText={t => setTicketDetails(t)}
            placeholder="Details"
            leftIconName={'book-information-variant'}
            contextMenuHidden={true}
            leftIcon
            leftIconStyle={{marginTop: hp(1.5)}}
            keyboardType="default"
            textInputStyles={styles.textInputStyles}
            mainView={styles.mainView}
            multiline
          />
          <Text style={styles.inputTopText}>Ticket Priority</Text>
          <CustomDropdown
            data={[
              {id: 1, name: 'High'},
              {
                id: 2,
                name: 'Low',
              },
              {
                id: 3,
                name: 'Medium',
              },
            ]}
            labelField={'name'}
            valueField={'id'}
            placeholder={'Select Priority'}
            iconName={'city-variant-outline'}
            iconType={'material-community'}
            onChange={item => {
              setTicketPriority(item);
            }}
            value={ticketPriority}
            container={{width: wp(90)}}
          />
          <Text style={styles.inputTopText}>Ticket Status</Text>
          <CustomDropdown
            data={[{id: 1, name: 'Completed'}]}
            labelField={'name'}
            valueField={'id'}
            placeholder={'Select Status'}
            iconName={'city-variant-outline'}
            iconType={'material-community'}
            onChange={item => {
              setTickeStatus(item);
            }}
            value={tickeStatus}
            container={{width: wp(90)}}
          />
          <Text style={styles.inputTopText}>Attachment</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.chooseDateView}
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  allowMultiSelection: false,
                  copyTo: 'cachesDirectory',
                  type: [types.doc, types.docx, types.pdf, types.images],
                });
                setAttachment(pickerResult);
              } catch (e) {
                handleError(e);
              }
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="file-document-outline"
                type="material-community"
                color={colors.grey}
                size={hp(2.5)}
              />
              <Text style={styles.choosenFileText}>
                {attachment?.name || 'Attach File'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setAttachment({})}>
              <Icon
                name="close"
                type="material-community"
                color={colors.primary}
                size={hp(1)}
                reverse
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <CustomButton
            isLoading={isLoading}
            name={'Submit Ticket'}
            buttonStyles={{marginTop: hp(5)}}
            onPress={() => props.navigation.replace('UserStack')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  createText: {
    fontFamily: customFonts.Bold,
    color: colors.grey,
    fontSize: 14,
    marginVertical: hp(2),
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  chooseDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: wp(2),
    borderRadius: 5,
    marginBottom: hp(1),
  },
  choosenFileText: {
    width: wp(70),
    color: colors.black,
    fontFamily: customFonts.Bold,
    fontSize: hp(1.8),
  },
  //textinput styles
  inputTopText: {
    width: wp(90),
    fontFamily: customFonts.Light,
    color: colors.secondary,
    fontSize: 14,
    marginVertical: hp(1),
  },
  mainView: {
    height: hp(20),
    alignItems: 'flex-start',
  },
  textInputStyles: {
    height: hp(20),
    textAlignVertical: 'top',
  },
});
