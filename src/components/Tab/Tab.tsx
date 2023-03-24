/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Styles';


export type TabPropsType = {
  item: {
    id: string | number;
    tab: string;
  };
  isSelected: boolean;
}

export default function Tab({ item, isSelected }: TabPropsType): JSX.Element {
  return (
    <View style={[Styles.container, isSelected ? { backgroundColor: 'rgba(138, 134, 241, 0.26)' } : {  }]} >
      <Text style={Styles.text} >{item.tab}</Text>
    </View>
  )
};

