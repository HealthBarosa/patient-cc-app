/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import React from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './Styles';

import Star from '../../constants/svg/Star.svg';
import Location from '../../constants/svg/Location.svg';


export type ServiceContainerPropsType = {
  item: {
    id: string | number;
    name: string;
    tag: string;
    image: string;
    star: string;
    reviews: string;
    location: string;
  }
}

export default function ServiceContainer({ item }: ServiceContainerPropsType): JSX.Element {
  return (
    <View style={Styles.container} >
      <Image source={item.image} style={Styles.image} />
      <View style={Styles.contentWrapper} >
        <Text style={Styles.headerText} >{item.name}</Text>
        <View style={Styles.tagContainer} >
          <Text style={Styles.tagText} >{item.tag}</Text>
        </View>
        <View style={Styles.footer} >
          <View style={Styles.reviewContainer} >
            <Star width={20} height={20} />
            <Text style={Styles.reviewText} >{`${item.star} (${item.reviews}) Reviews`}</Text>
          </View>
          <View style={Styles.locationContainer} >
            <Location width={15} height={15} />
            <Text numberOfLines={2} ellipsizeMode={'tail'} >{item.location}</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

