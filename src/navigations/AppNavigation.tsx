/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import { ChangeLanguage, EditProfile } from '../screens';

import { NavigationTree } from '../utils';


const AppNavigationStack = createNativeStackNavigator();

export default function AppNavigation(): JSX.Element {
  const screenOptions = {
    headerShown: false,
  }

  return (
    <AppNavigationStack.Navigator screenOptions={screenOptions} >
      <AppNavigationStack.Screen name={NavigationTree.app.EditProfile} component={EditProfile} />
      <AppNavigationStack.Screen name={NavigationTree.app.ChangeLanguage} component={ChangeLanguage} />
      <AppNavigationStack.Screen name={NavigationTree.app.BottomTab} component={BottomTabNavigator} />
    </AppNavigationStack.Navigator>
  )
};

