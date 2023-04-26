import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from '@react-navigation/native';

import { NavigationTree } from '@/utils';

import CorrectSVG from "@/constants/svg/CorrectSVG.svg";
import SprinkSVG from "@/constants/svg/SprinklesSVG.svg";

import Styles from './Styles';


export default function IndividualSplashScreen(): JSX.Element {
  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (navigation) {
        navigation.navigate(NavigationTree.app.BottomTab as never)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={Styles.container} >
      <SprinkSVG width={Dimensions.get('window').width} height={1.1 * Dimensions.get('window').height} />
      <BlurView style={Styles.blurView} blurType="light" blurAmount={4} reducedTransparencyFallbackColor="white" >
        <View style={Styles.content} >
          <CorrectSVG />
          <Text style={Styles.text} >Congratulation, You are redirected to Individual account</Text>
        </View>
      </BlurView>
    </View>
  )
};

