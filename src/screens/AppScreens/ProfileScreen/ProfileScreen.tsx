import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import Styles from "./Styles";

import { MoreOptions } from "@/components";
import {
	LocationIcon,
	ProfessionIcon,
	UserProfile,
} from "@/constants/svg/icons";

export default function ProfileScreen(): JSX.Element {
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
						<TouchableOpacity style={Styles.editProfileButton}>
							<Text style={Styles.editProfileButtonText}>
								Edit Profile
							</Text>
						</TouchableOpacity>
						<View style={Styles.documentContainer}>
							<MoreOptions>
								<MoreOptions.OptionTabs
									iconName="Document"
									optionName="Change Language"
								/>
							</MoreOptions>
						</View>
						<MoreOptions>
							<MoreOptions.OptionTabs
								iconName="Glob"
								optionName="Change Language"
							/>
							<MoreOptions.OptionTabs
								iconName="Heart"
								optionName="Subscription"
							/>
							<MoreOptions.OptionTabs
								iconName="Dollar"
								optionName="Payment"
							/>
							<MoreOptions.OptionTabs
								iconName="Bank"
								optionName="Add Bank"
							/>
							<MoreOptions.OptionTabs
								iconName="Refer"
								optionName="Refer Friend"
							/>
						</MoreOptions>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
