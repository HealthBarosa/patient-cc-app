/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ServiceScreen, ProfileScreen } from '../../screens';

import { NavigationTree } from '../../utils';

import FocusedHomeSVG from '../../constants/svg/icons/FocusedHome.svg';
import BlurredHomeSVG from '../../constants/svg/icons/BlurredHome.svg';
import FocusedServicesSVG from '../../constants/svg/icons/FocusedService.svg';
import BlurredServicesSVG from '../../constants/svg/icons/BlurredService.svg';
import FocusedProfileSVG from '../../constants/svg/icons/FocusedProfile.svg';
import BlurredProfileSVG from '../../constants/svg/icons/BlurredProfile.svg';

import Styles from './Styles';
import AppStyles from '../../AppStyles';


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator(): JSX.Element {
  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      height: 56,
      /*position: 'absolute',
      bottom: 15,
      right: 15,
      left: 15, */
      /*borderTopLeftRadius: 10,
      borderTopRightRadius: 10,*/
      backgroundColor: AppStyles.colorWhite,
    }
  }

  return (
    <BottomTab.Navigator screenOptions={screenOptions} >
      <BottomTab.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={[Styles.label, focused ? Styles.focusedLabel : Styles.blurredLabel]} >Home</Text>,
        tabBarIcon: ({ focused }) => (
          focused ? <FocusedHomeSVG /> : <BlurredHomeSVG />
        )
      }} name={NavigationTree.app.HomeScreen} component={HomeScreen} />
      <BottomTab.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={[Styles.label, focused ? Styles.focusedLabel : Styles.blurredLabel]} >Services</Text>,
        tabBarIcon: ({ focused }) => (
          focused ? <FocusedServicesSVG /> : <BlurredServicesSVG />
        )
      }} name={NavigationTree.app.ServiceScreen} component={ServiceScreen} />
      <BottomTab.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={[Styles.label, focused ? Styles.focusedLabel : Styles.blurredLabel]} >Profile</Text>,
        tabBarIcon: ({ focused }) => (
          focused ? <FocusedProfileSVG /> : <BlurredProfileSVG />
        )
      }} name={NavigationTree.app.ProfileScreen} component={ProfileScreen} />
    </BottomTab.Navigator>
  )
};

