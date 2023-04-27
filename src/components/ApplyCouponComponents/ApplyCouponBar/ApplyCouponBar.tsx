import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import AppStyles from '@/AppStyles';

import Styles from './Styles';


export default function ApplyCouponBar(): JSX.Element {
  const [coupon, setCoupon] = useState<string>("")

  async function onPressApply(): Promise<void> {
    console.log(coupon);
  }

  return (
    <View style={Styles.container} >
      <TextInput placeholder='Apply your coupon code here' cursorColor={AppStyles.colorGrey2} onChangeText={setCoupon} style={Styles.input} />
      <Pressable onPress={onPressApply} style={Styles.applyButton} >
        <Text style={Styles.applyButtonText} >Apply</Text>
      </Pressable>
    </View>
  )
}