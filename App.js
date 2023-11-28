import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './Src/Utils/Colors';
import {hp} from './Src/Utils/Responsive';
import Routes from './Src/Navigation/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBarPlaceHolder />
      <Routes />
    </View>
  );
}
function StatusBarPlaceHolder() {
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? hp('4.5%') : hp('0%');
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: colors.primary,
      }}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
