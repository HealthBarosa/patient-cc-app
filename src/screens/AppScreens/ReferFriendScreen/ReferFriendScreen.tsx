import React from "react";
import {
	View,
	Text,
	StatusBar,
	Dimensions,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PrimaryButton, ScreenHeader } from "@/components";
import { InviteFriendBanner } from "@/constants/svg/ReferFriend";
import { InfoIcon, CopyIcon } from "@/constants/svg/icons";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";

export default function ReferFriendScreen(): JSX.Element {
	const navigation = useNavigation();

	function onPressGoBack() {
		navigation.goBack();
	}

	return (
		<View style={Styles.container}>
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			<ScreenHeader screenName="Refer a Friend" onPress={onPressGoBack} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				bounces={false}
				scrollEventThrottle={16}
				contentContainerStyle={Styles.wrapper}
			>
				<View style={Styles.mainContent}>
					<View style={Styles.banner}>
						<InviteFriendBanner width={"100%"} height={110} />
						<View style={Styles.bannerContent}>
							<Text style={Styles.bannerHeader}>
								Invite to a Friend
							</Text>
							<Text style={Styles.bannerText}>
								{"Invite friends to Patient.CC and \nboth get "}
								<Text style={Styles.discountText}>
									{"2% discount"}
								</Text>
							</Text>
						</View>
					</View>
					<View style={Styles.content}>
						<View style={Styles.workContainer}>
							<InfoIcon />
							<Text style={Styles.workText}>How it works</Text>
						</View>
						<View style={Styles.progressContainer}>
							<View
								style={[Styles.progressbar, { height: "90%" }]}
							/>
							<View style={Styles.progressStep}>
								<View style={Styles.indicator}>
									<View style={Styles.indicatorKnob} />
								</View>
								<View style={Styles.indicatorTextContainer}>
									<Text style={Styles.indicatorTextHeader}>
										Invite Your Friend
									</Text>
									<Text style={Styles.indicatorText}>
										Just share your Link
									</Text>
								</View>
							</View>
							<View style={Styles.progressStep}>
								<View style={Styles.indicator}>
									<View style={Styles.indicatorKnob} />
								</View>
								<View style={Styles.indicatorTextContainer}>
									<Text style={Styles.indicatorTextHeader}>
										They Sign-up
									</Text>
									<Text style={Styles.indicatorText}>
										with 2% Discount
									</Text>
								</View>
							</View>
							<View style={Styles.progressStep}>
								<View style={Styles.indicator}>
									<View style={Styles.indicatorKnob} />
								</View>
								<View style={Styles.indicatorTextContainer}>
									<Text style={Styles.indicatorTextHeader}>
										You get Coupon
									</Text>
									<Text style={Styles.indicatorText}>
										You get 2% Discount coupon
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={Styles.footer}>
					<View style={Styles.copyContainer}>
						<Text style={Styles.copyText}>
							Copy your code{" "}
							<Text style={Styles.codeText}>docvhg</Text>
						</Text>
						<TouchableOpacity activeOpacity={0.85}>
							<CopyIcon />
						</TouchableOpacity>
					</View>
					<PrimaryButton
						onPress={() => {}}
						backgroundColor={AppStyles.colorBrand1}
					>
						Invite
					</PrimaryButton>
				</View>
			</ScrollView>
		</View>
	);
}
