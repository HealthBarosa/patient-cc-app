import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MoreOptions } from "@/components";
import { NavigationTree } from "@/utils";
import {
	LocationIcon,
	ProfessionIcon,
	UserProfile,
} from "@/constants/svg/icons";

import Styles from "./Styles";

export default function ProfileScreen(): JSX.Element {
	const navigation = useNavigation();

	function onPressEditProfile() {
		navigation.navigate(NavigationTree.app.EditProfile as never);
	}
	function onPressChangeLanguage() {
		navigation.navigate(NavigationTree.app.ChangeLanguage as never);
	}
	function onPressAddBank() {
		navigation.navigate(NavigationTree.app.AddBankScreen as never);
	}
	function onPressReferFriend() {
		navigation.navigate(NavigationTree.app.ReferFriendScreen as never);
	}

	return (
		<View style={Styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				contentContainerStyle={Styles.scrollContainer}
			>
				<View style={Styles.coverContainer}>
					<Image
						source={require("../../../constants/image/Cover.png")}
						style={Styles.coverImage}
					/>
					<View style={Styles.profileContainer}>
						<View style={Styles.profileWrapper}>
							<UserProfile width={90} height={90} />
							<Text style={Styles.profileText}>80%</Text>
						</View>
					</View>
				</View>
				<View style={Styles.content}>
					<View style={Styles.profileDetails}>
						<Text style={Styles.profileName}>Raj Chauhan</Text>
						<View style={Styles.professionContainer}>
							<ProfessionIcon />
							<Text style={Styles.professionName}>
								Dermatologist
							</Text>
						</View>
						<View style={Styles.locationContainer}>
							<LocationIcon />
							<Text style={Styles.locationName}>
								Hyderabad, Telangana
							</Text>
						</View>
					</View>
					<View style={Styles.contentBody}>
						<TouchableOpacity
							activeOpacity={0.85}
							onPress={onPressEditProfile}
							style={Styles.editProfileButton}
						>
							<Text style={Styles.editProfileButtonText}>
								Edit Profile
							</Text>
						</TouchableOpacity>
						<View style={Styles.documentContainer}>
							<MoreOptions>
								<MoreOptions.OptionTabs
									iconName="Document"
									optionName="My Document"
								/>
							</MoreOptions>
						</View>
						<MoreOptions>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Glob"
									optionName="Change Language"
									onPress={onPressChangeLanguage}
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									iconName="Heart"
									optionName="Subscription"
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									iconName="Dollar"
									optionName="Payment"
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Bank"
									optionName="Add Bank"
									onPress={onPressAddBank}
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Refer"
									optionName="Refer Friend"
									onPress={onPressReferFriend}
								/>
							</View>
						</MoreOptions>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
