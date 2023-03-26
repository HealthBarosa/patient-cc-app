/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MoreOptions } from '../../../components';

import { NavigationTree } from '../../../utils';

import Styles from './Styles';

import UserProfile from '../../../constants/svg/icons/User.svg';
import ProfessionIcon from '../../../constants/svg/icons/Profession.svg';
import LocationIcon from '../../../constants/svg/icons/LocationGrey.svg';


export default function ProfileScreen(): JSX.Element {
  const navigation = useNavigation()

  function onPressEditProfile() { navigation.navigate(NavigationTree.app.EditProfile) }
  function onPressChangeLanguage() { navigation.navigate(NavigationTree.app.ChangeLanguage) }
  function onPressAddBank() { navigation.navigate(NavigationTree.app.AddBankScreen) }

  return (
    <View style={Styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} contentContainerStyle={Styles.scrollContainer} >
        <View style={Styles.coverContainer} >
          <Image source={require('../../../constants/image/Cover.png')} style={Styles.coverImage} />
          <View style={Styles.profileContainer} >
            <View style={Styles.profileWrapper} >
              <UserProfile width={90} height={90} />
              <Text style={Styles.profileText} >80%</Text>
            </View>
          </View>
        </View>
        <View style={Styles.content} >
          <View style={Styles.profileDetails} >
            <Text style={Styles.profileName} >Raj Chauhan</Text>
            <View style={Styles.professionContainer} >
              <ProfessionIcon />
              <Text style={Styles.professionName} >Dermatologist</Text>
            </View>
            <View style={Styles.locationContainer} >
              <LocationIcon />
              <Text style={Styles.locationName} >Hyderabad, Telangana</Text>
            </View>
          </View>
          <View style={Styles.contentBody} >
            <TouchableOpacity activeOpacity={0.85} onPress={onPressEditProfile} style={Styles.editProfileButton} >
              <Text style={Styles.editProfileButtonText} >Edit Profile</Text>
            </TouchableOpacity>
            <View style={Styles.documentContainer} >
              <MoreOptions>
                <MoreOptions.OptionTabs iconName="Document" optionName="My Document" tabStyle={{ marginBottom: 0 }} />
              </MoreOptions>
            </View>
            <MoreOptions>
              <MoreOptions.OptionTabs activeOpacity={0.85} iconName="Glob" optionName="Change Language" tabStyle={{ marginBottom: 20 }} onPress={onPressChangeLanguage} />
              <MoreOptions.OptionTabs iconName="Heart" optionName="Subscription" tabStyle={{ marginBottom: 20 }} />
              <MoreOptions.OptionTabs iconName="Dollar" optionName="Payment" tabStyle={{ marginBottom: 20 }} />
              <MoreOptions.OptionTabs activeOpacity={0.85} iconName="Bank" optionName="Add Bank" tabStyle={{ marginBottom: 20 }} onPress={onPressAddBank} />
              <MoreOptions.OptionTabs iconName="Refer" optionName="Refer Friend" tabStyle={{ marginBottom: 20 }} />
            </MoreOptions>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

