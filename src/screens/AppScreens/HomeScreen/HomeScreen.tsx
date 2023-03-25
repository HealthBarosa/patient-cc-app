/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Banner } from '../../../components';
import { AppReferContainer, TieupCarousel, HowItWorkCarousel } from '../../../containers';

import Styles from './Styles';


const TieupHospitals = [
  { id: 1, name: 'Apollo Hospitals', image: require('../../../constants/image/Hospital1.png'), star: '4.8', reviews: '20,171', location: 'Hyderabad, Secunderabad'},
  { id: 2, name: 'Aditya Hospitals', image: require('../../../constants/image/Hospital2.png'), star: '4.8', reviews: '2,011', location: 'Nallagandala, Telengana'},
  { id: 3, name: 'Aditya Hospitals', image: require('../../../constants/image/Hospital2.png'), star: '4.8', reviews: '2,011', location: 'Nallagandala, Telengana'},
]
const HowItWorks = [
  { id: 1, image: require('../../../constants/image/How1.png')},
  { id: 2, image: require('../../../constants/image/How1.png')},
  { id: 3, image: require('../../../constants/image/How1.png')},
]

export default function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={Styles.container} >
      <StatusBar barStyle={'dark-content'} translucent />
      <Text style={Styles.headerText} >Patient. CC</Text>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} scrollEventThrottle={16} contentContainerStyle={Styles.scrollContainer} >
        <View style={Styles.bannerContainer} >
          <Banner />
        </View>
        <View style={Styles.referContainer} >
          <AppReferContainer referOptions={['Refer Patient', 'Treat Patient']} />
        </View>
        <View style={Styles.tieupCarouselContainer} >
          <TieupCarousel data={TieupHospitals as any} />
        </View>
        <View style={Styles.howItWorkContainer} >
          <HowItWorkCarousel data={HowItWorks as any} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

