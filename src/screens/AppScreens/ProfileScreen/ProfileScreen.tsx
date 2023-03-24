/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from './Styles';


export default function ProfileScreen(): JSX.Element {
  return (
    <SafeAreaView style={Styles.container} >
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
};

