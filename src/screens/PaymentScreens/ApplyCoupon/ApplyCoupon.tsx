import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenHeader, MainButton, ApplyCouponBar, Coupon } from '@/components';

import Styles from './Styles';


const coupons = [
  {
    id: 1,
    code: "trynewmed",
    value: "20%",
  },
  {
    id: 2,
    code: "trynewmed",
    value: "20%",
  },
  {
    id: 3,
    code: "trynewmed",
    value: "20%",
  },
  {
    id: 4,
    code: "trynewmed",
    value: "20%",
  },
  {
    id: 5,
    code: "trynewmed",
    value: "20%",
  },
]

export default function ApplyCoupon(): JSX.Element {
  const navigation = useNavigation()

  function onPressGoBack() { navigation.goBack() }

  return (
    <View style={Styles.container} >
      <StatusBar
				barStyle={"dark-content"}
				translucent
				backgroundColor={"transparent"}
      />
      <ScreenHeader
				screenName="Payment Method"
				onPress={onPressGoBack}
			/>
      <View style={Styles.wrapper} >
        <ApplyCouponBar />
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 20 }} contentContainerStyle={Styles.scrollContainer} >
          {coupons.map(item => (
            <Coupon key={item.id.toString()} code={item.code} value={item.value} onPressApply={() => {}} onPressReferPatient={() => {}} />
          ))}
        </ScrollView>
        <MainButton onPress={onPressGoBack} />
      </View>
    </View>
  )
};

