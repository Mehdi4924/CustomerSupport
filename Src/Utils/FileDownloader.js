import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-simple-toast';
import {PermissionsAndroid, Platform} from 'react-native';
const isPermitted = async () => {
  if (Platform.OS === 'android') {
    try {
      console.log('idr aye');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs access to Storage data',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  } else {
    return true;
  }
};

export default async function FileDownloader(file) {
  const {config, fs} = RNFetchBlob;
  const regExp = /\/|<|>|\*|"|:|\?|\\|\|/g;
  if ((Platform.OS = 'android')) {
    if (await isPermitted()) {
      const attachmentToDownload = file;
      const splitName = attachmentToDownload.split('/');
      const fileName = splitName[splitName.length - 1];
      let PictureDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: false,
          path: PictureDir + '/' + fileName.replace(regExp, '_'),
          description: 'Downloading image.',
        },
      };
      config(options)
        .fetch('GET', attachmentToDownload)
        .then(res => {
          console.log('success getting file', res, res.path());
          Toast.show(
            `File Saved At In Pictures Directory by the name of ${fileName}`,
            Toast.LONG,
          );
        })
        .catch(err => {
          Toast.show('File Was Not Downloaded Due To Error', Toast.LONG);
          console.log('eerror downloading file', JSON.stringify(err, null, 2));
        });
    } else {
      Toast.show('Please Grant Permission For Downloading', Toast.LONG);
    }
  } else {
  }

  return null;
}
