import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ArrowBackBlack from "@/constants/svg/icons/ArrowBackBlack.svg";

import Styles from './Styles';


interface IMainButtonPropsType {
  onPress: () => void;
}

export default function MainButton({ onPress }: IMainButtonPropsType): JSX.Element {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={Styles.container} >
      <ArrowBackBlack  />
      <Text style={Styles.buttonText} >Go Back</Text>
    </TouchableOpacity>
  )
};

