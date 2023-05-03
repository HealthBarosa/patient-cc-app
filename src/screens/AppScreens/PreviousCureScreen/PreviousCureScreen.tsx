import React from "react";
import {
	View,
	Text,
	StatusBar,
	ScrollView,
	ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import PlayPurpleIcon from "@/constants/svg/icons/PlayPurpleIcon.svg";
import { PreviousCureCard, PrimaryButton, ScreenHeader } from "@/components";

import { NavigationTree } from "@/utils";

import AppStyles from "@/AppStyles";
import Styles from "./Styles";

const previousCures: {
	id: number;
	image: ImageSourcePropType;
	name: string;
	price: string;
	location: string;
}[] = [
	{
		id: 1,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 2,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 3,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 4,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 5,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 6,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 7,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 8,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 9,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 10,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 11,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
];

export default function PreviousCureScreen(): JSX.Element {
	const navigation = useNavigation();

	function onPressGoBack() {
		navigation.goBack();
	}
	function onPressCard() {}
	function onPressReferCase() {}
	function onPressPlay() {
		navigation.navigate(NavigationTree.app.DemoVideosScreen as never);
	}

	return (
		<View style={Styles.container}>
			{/* status bar */}
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			{/* header */}
			<ScreenHeader screenName="Previous Cure" onPress={onPressGoBack} />

			{/* body */}
			<View style={Styles.wrapper}>
				{/* body header */}
				<View style={Styles.header}>
					<Text style={Styles.headerText}>Previous Cure</Text>
					<Text style={Styles.headerBodyText}>
						List of Hospitals, taking care of our previous patients,
						cure patients with us.
					</Text>
				</View>

				{/* scroll container */}
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={Styles.scroll}
					contentContainerStyle={Styles.scrollContainer}
				>
					{previousCures.map((item) => (
						<PreviousCureCard
							key={item.id}
							onPressCard={onPressCard}
							item={item}
						/>
					))}
				</ScrollView>
			</View>

			{/* footer */}
			<View style={Styles.footer}>
				<View style={Styles.playContainer}>
					<PlayPurpleIcon onPress={onPressPlay} />
					<Text style={Styles.playText}>Watch Demo</Text>
				</View>
				<PrimaryButton
					onPress={onPressReferCase}
					backgroundColor={AppStyles.colorBrand1}
				>
					Refer Case
				</PrimaryButton>
			</View>
		</View>
	);
}
