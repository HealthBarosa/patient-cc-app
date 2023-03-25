/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '../../../components';
import { TabContainer, ServiceContainer } from '../../../containers';

import Styles from './Styles';


const tabs = [
  {id: 1, tab: 'All'},
  {id: 2, tab: 'Hospitals'},
  {id: 3, tab: 'Radiology'},
  {id: 4, tab: 'Diagnostics'},
]

const services = [
  {id: 1, image: require('../../../constants/image/Hospital1.png'), name: 'Sahyadhri Hospital', tag: 'Hospital', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 2, image: require('../../../constants/image/Hospital2.png'), name: 'Atithi Hospital', tag: 'Rediology', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 3, image: require('../../../constants/image/Hospital1.png'), name: 'Sahyadhri Hospital', tag: 'Hospital', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 4, image: require('../../../constants/image/Hospital2.png'), name: 'Atithi Hospital', tag: 'Rediology', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 5, image: require('../../../constants/image/Hospital1.png'), name: 'Sahyadhri Hospital', tag: 'Hospital', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 6, image: require('../../../constants/image/Hospital2.png'), name: 'Atithi Hospital', tag: 'Rediology', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 7, image: require('../../../constants/image/Hospital1.png'), name: 'Sahyadhri Hospital', tag: 'Hospital', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
  {id: 8, image: require('../../../constants/image/Hospital2.png'), name: 'Atithi Hospital', tag: 'Rediology', star: '4.8', reviews: '20,171', location: 'H no. 8-2-601/p/15, Banjara Hills, Hyderabad, Telangana 500034'},
]

export default function ProfileScreen(): JSX.Element {
  const navigation = useNavigation()
  const [selctedTabIndex, setSelctedTabIndex] = useState<number>(1)

  function onPressGoBack() { navigation.goBack() }
  function onPressTab(index: number) { setSelctedTabIndex(index) }

  return (
    <View style={Styles.container} >
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <ScreenHeader screenName="Service" onPress={onPressGoBack} />
      <View style={Styles.contentWrapper} >
        <TabContainer tabs={tabs} selectedTabIndex={selctedTabIndex} />
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} style={{ marginTop: 20 }} contentContainerStyle={Styles.scrollContainer} >
          {services.map((item, i) => (
            <ServiceContainer key={i.toString()} item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
};

