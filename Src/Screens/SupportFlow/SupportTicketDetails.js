import {
  FlatList,
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
import {Icon} from '@rneui/base';
import CustomDropdown from '../../Components/CustomDropdown';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInputs';
import DocumentPicker, {
  types,
  isInProgress,
} from 'react-native-document-picker';
import FileDownloader from '../../Utils/FileDownloader';
import {Image} from 'react-native';
const flatListData = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    attachemt: true,
  },
  {
    id: 2,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    attachemt: false,
  },
  {
    id: 2,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    attachemt: true,
  },
  {
    id: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    attachemt: false,
  },
];
const dummyImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&usqp=CAU';

export default function SupportTicketDetails(props) {
  const [status, setStatus] = useState({});
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState({});
  const [selectedImage, setSelectedImage] = useState('');
  const [imageModal, setImageModal] = useState(false);
  return (
    <View style={universalStyles.containerStyles}>
      <Header
        navigation={props.navigation}
        topText={'Ticket Details'}
        leftIcon
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.subViewContainer}>
          <Text style={styles.severityText}>Critical</Text>
          <Text style={styles.ticketNoText}>Ticket No: 2341</Text>
        </View>
        <View style={styles.subViewContainer}>
          <Text style={[styles.ticketNoText, {marginVertical: hp(1)}]}>
            Change The Status Of Ticket
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp(90),
            }}>
            <CustomDropdown
              data={[
                {id: 1, name: 'Closed'},
                {
                  id: 2,
                  name: 'Pending',
                },
              ]}
              labelField={'name'}
              valueField={'id'}
              placeholder={'Change Status'}
              iconName={'city-variant-outline'}
              iconType={'material-community'}
              onChange={item => {
                setStatus(item);
              }}
              value={status}
              container={{width: wp(60)}}
            />
            <CustomButton
              isLoading={false}
              name={'Change'}
              buttonStyles={styles.buttonStyles}
              textStyles={{color: colors.secondary}}
              onPress={() => null}
              disabled={false}
            />
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.infoSubView}>
            <Icon
              name={'ticket'}
              type={'material-community'}
              color={colors.primary}
              size={hp(3)}
              style={{marginTop: hp(0.5)}}
            />
            <Text style={styles.ticketInfoText}>Ticket Inforamtion</Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Created On:</Text>
            <Text style={styles.infoValueText}>12, Jan 2023</Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Priority:</Text>
            <Text style={styles.infoValueText}>High Priority</Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Status:</Text>
            <Text style={styles.infoValueText}>Closed</Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Subject:</Text>
            <Text style={styles.infoValueText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Attachments:</Text>
            <View style={styles.attachmentImagesView}>
              {[
                dummyImage,
                dummyImage,
                dummyImage,
                dummyImage,
                dummyImage,
                dummyImage,
                dummyImage,
                dummyImage,
              ].map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedImage(item);
                      setImageModal(true);
                    }}>
                    <Image
                      source={{
                        uri: item,
                      }}
                      style={styles.attachmentImage}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.infoSubView}>
            <Icon
              name={'ticket'}
              type={'material-community'}
              color={colors.primary}
              size={hp(3)}
              style={{marginTop: hp(0.5)}}
            />
            <Text style={styles.ticketInfoText}>Ticket Description</Text>
          </View>
          <View style={styles.infoSubView}>
            <Text style={styles.infoHeadingText}>Detail:</Text>
            <Text style={styles.infoValueText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </View>
        </View>
        <View style={[styles.subViewContainer, {marginTop: 0}]}>
          <Text style={[styles.severityText, {backgroundColor: colors.grey}]}>
            History Of Ticket
          </Text>
        </View>
        <FlatList
          data={flatListData}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={
                  item.id == 2
                    ? styles.listRightContainer
                    : styles.listLeftContainer
                }>
                <Text style={styles.userNameText}>
                  {item.id == 2 ? 'Support Team' : 'You'}
                </Text>
                <Text
                  style={
                    item.id == 2 ? styles.listRightText : styles.listLeftText
                  }>
                  {item.text}
                </Text>
                {item.attachemt ? (
                  <CustomButton
                    isLoading={false}
                    name={'Download Attachment'}
                    buttonStyles={styles.listButton}
                    textStyles={{color: colors.grey}}
                    onPress={() => null}
                    disabled={false}
                  />
                ) : null}
              </View>
            );
          }}
        />
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomTextInput
          value={message}
          onChangeText={t => setMessage(t)}
          placeholder="Send New Message"
          leftIconName={'message'}
          contextMenuHidden={true}
          leftIcon
          leftIconStyle={{marginTop: hp(1.5)}}
          keyboardType="default"
          textInputStyles={styles.textInputStyles}
          mainView={styles.mainView}
          multiline
        />
        <View style={{justifyContent: 'space-between', paddingVertical: hp(2)}}>
          <TouchableOpacity
            style={styles.sendBtnView}
            onPress={async () => {
              if (attachment.uri) {
                setAttachment({});
              } else {
                try {
                  const pickerResult = await DocumentPicker.pickSingle({
                    presentationStyle: 'fullScreen',
                    allowMultiSelection: false,
                    copyTo: 'cachesDirectory',
                    type: [types.doc, types.docx, types.pdf, types.images],
                  });
                  setAttachment(pickerResult);
                } catch (e) {
                  console.log(e);
                  // handleError(e);
                }
              }
            }}>
            <Icon
              name={attachment.uri ? 'close' : 'attachment'}
              type={'material-community'}
              color={colors.white}
              size={hp(2.5)}
              style={{marginTop: hp(0.5)}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendBtnView}>
            <Icon
              name={'send-outline'}
              type={'material-community'}
              color={colors.white}
              size={hp(2.5)}
              style={{marginTop: hp(0.5)}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={imageModal}
        onRequestClose={() => null}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setImageModal(!imageModal)}>
            <Icon
              name="close"
              type="material-community"
              color={colors.primary}
              size={hp(4)}
              style={styles.modalImage}
            />
          </TouchableOpacity>
          <View style={styles.modalView}>
            <Image
              source={{uri: selectedImage}}
              style={{width: wp(100), height: hp(60)}}
              resizeMode="contain"
            />
          </View>
          <CustomButton
            isLoading={false}
            name={'Download'}
            buttonStyles={styles.smallBtn}
            textStyles={{color: colors.primary}}
            onPress={() => FileDownloader(selectedImage)}
            disabled={false}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  subViewContainer: {
    width: wp(90),
    marginTop: hp(2),
    alignItems: 'flex-start',
  },
  severityText: {
    padding: 5,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    color: colors.white,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: customFonts.Bold,
  },
  ticketNoText: {
    color: colors.grey,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: customFonts.Bold,
    marginTop: hp(1),
  },
  infoView: {
    backgroundColor: colors.lightGray,
    width: wp(90),
    borderRadius: 10,
    marginVertical: hp(1),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  infoSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(0.5),
  },
  ticketInfoText: {
    color: colors.secondary,
    fontFamily: customFonts.Bold,
    marginTop: hp(1),
    width: wp(75),
  },
  infoHeadingText: {
    color: colors.secondary,
    fontFamily: customFonts.Bold,
  },
  attachmentImagesView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: wp(60),
  },
  attachmentImage: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2),
    marginTop: hp(0.5),
  },
  infoValueText: {
    color: colors.grey,
    fontFamily: customFonts.Bold,
    width: wp(60),
  },
  buttonStyles: {
    height: hp(6.5),
    width: wp(25),
    backgroundColor: colors.primary,
  },
  smallBtn: {
    height: hp(5),
    width: wp(30),
    backgroundColor: colors.white,
  },
  mainView: {
    height: hp(15),
    alignItems: 'flex-start',
    width: wp(80),
  },
  textInputStyles: {
    height: hp(15),
    textAlignVertical: 'top',
    width: wp(72),
  },
  sendBtnView: {
    width: wp(10),
    height: wp(10),
    borderRadius: 100,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(1),
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
  modalImage: {
    backgroundColor: colors.white,
    height: hp(4),
    width: hp(4),
    borderRadius: hp(3),
    marginLeft: wp(88),
    marginTop: hp(4),
  },
  //list styles
  listRightContainer: {
    width: wp(80),
    backgroundColor: colors.primary,
    marginVertical: hp(1),
    borderRadius: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  listRightText: {
    textAlign: 'right',
    color: colors.white,
    fontFamily: customFonts.Light,
  },
  listLeftContainer: {
    width: wp(80),
    backgroundColor: colors.secondary,
    marginVertical: hp(1),
    borderRadius: 10,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  userNameText: {
    backgroundColor: colors.white,
    paddingHorizontal: hp(1),
    borderRadius: 2,
    marginVertical: hp(1),
    fontFamily: customFonts.Bold,
  },
  listLeftText: {
    textAlign: 'left',
    color: colors.white,
    fontFamily: customFonts.Light,
  },
  listButton: {
    backgroundColor: colors.white,
    width: wp(70),
    height: hp(5),
  },
});
