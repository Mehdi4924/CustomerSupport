import React from 'react';
import {navigationRef} from './NavigationRef';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransitionPresets} from '@react-navigation/stack';

import Login from '../Screens/Auth/Login';
import Splash from '../Screens/Auth/Splash';
import Signup from '../Screens/Auth/Signup';
import Dashboard from '../Screens/AppFlow/Dashboard';
import AllTickets from '../Screens/AppFlow/AllTickets';
import TicketDetails from '../Screens/AppFlow/TicketDetails';
import CreateTicket from '../Screens/AppFlow/CreateTicket';
import {hp} from '../Utils/Responsive';
import {colors} from '../Utils/Colors';
import {Icon} from '@rneui/base';
import {customFonts} from '../Utils/Fonts';
import SupportDashboard from '../Screens/SupportFlow/SupportDashboard';
import SupportTicketDetails from '../Screens/SupportFlow/SupportTicketDetails';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={AuthStack} name={'AuthStack'} />
        <Stack.Screen component={UserStack} name={'UserStack'} />
        <Stack.Screen component={AppFlowStack} name={'AppFlowStack'} />
        <Stack.Screen component={SupportStack} name={'SupportStack'} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const AuthRouter = createStackNavigator();
export function AuthStack() {
  return (
    <AuthRouter.Navigator screenOptions={{headerShown: false}}>
      <AuthRouter.Screen
        component={Splash}
        name={'Splash'}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <AuthRouter.Screen
        component={Signup}
        name={'Signup'}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <AuthRouter.Screen
        component={Login}
        name={'Login'}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </AuthRouter.Navigator>
  );
}
const UserRouter = createBottomTabNavigator();
export function UserStack() {
  return (
    <UserRouter.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomTabStyles,
      }}>
      <UserRouter.Screen
        component={Dashboard}
        name={'Dashboard'}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.tabBarLabelStyle,
                  {
                    color: focused ? colors.grey : colors.white,
                  },
                ]}>
                Dashboard
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="view-dashboard"
                type="material-community"
                color={focused ? colors.grey : colors.white}
                size={25}
              />
            );
          },
        }}
      />
      <UserRouter.Screen
        component={CreateTicket}
        name={'CreateTicket'}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.tabBarLabelStyle,
                  {
                    color: focused ? colors.grey : colors.white,
                  },
                ]}>
                Create Ticket
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="ticket"
                type="material-community"
                color={focused ? colors.grey : colors.white}
                size={25}
              />
            );
          },
        }}
      />
    </UserRouter.Navigator>
  );
}
const AppFlowRouter = createStackNavigator();
export function AppFlowStack() {
  return (
    <AppFlowRouter.Navigator screenOptions={{headerShown: false}}>
      <AppFlowRouter.Screen
        component={AllTickets}
        name={'AllTickets'}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <AppFlowRouter.Screen
        component={TicketDetails}
        name={'TicketDetails'}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </AppFlowRouter.Navigator>
  );
}
const SupportRouter = createStackNavigator();
export function SupportStack() {
  return (
    <SupportRouter.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomTabStyles,
      }}>
      <SupportRouter.Screen
        component={SupportDashboard}
        name={'SupportDashboard'}
      />
      <SupportRouter.Screen
        component={SupportTicketDetails}
        name={'SupportTicketDetails'}
      />
    </SupportRouter.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomTabStyles: {
    height: hp(8),
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabBarLabelStyle: {
    fontFamily: customFonts.Bold,
    fontSize: 12,
  },
});
