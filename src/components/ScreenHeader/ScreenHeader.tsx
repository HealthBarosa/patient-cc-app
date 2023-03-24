/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import Styles from './Styles';

import BackArrowIcon from '../../constants/svg/icons/BackArrow.svg';


export type ScreenHeaderPropsType = {
  screenName?: string;
  onPress: () => void;
}

export default function ScreenHeader({ screenName, onPress }: ScreenHeaderPropsType): JSX.Element {
  return (
    <View style={Styles.container} >
      <Pressable onPress={onPress} >
        <BackArrowIcon />
      </Pressable>
      {screenName && <Text style={Styles.text} >{screenName}</Text>}
    </View>
  )
};

