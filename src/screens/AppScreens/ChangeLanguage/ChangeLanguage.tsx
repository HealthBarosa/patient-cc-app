/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import React from "react";
import {
	View,
	Text,
	StatusBar,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LanguageTab, ScreenHeader } from "../../../components";

import Styles from "./Styles";
import { LanguageSearchContainer } from "../../../containers";
import AppStyles from "../../../AppStyles";

const languages = [
	{ id: 1, name: "English" },
	{ id: 2, name: "Hindi" },
	{ id: 3, name: "Tamil" },
	{ id: 4, name: "Urdu" },
	{ id: 5, name: "Punjabi" },
	{ id: 6, name: "Bengali" },
];

export default function ChangeLanguage(): JSX.Element {
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
			<ScreenHeader
				screenName="Change Language"
				onPress={onPressGoBack}
			/>
			<View style={Styles.wrapper}>
				<LanguageSearchContainer />
				<ScrollView
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
					style={{ marginTop: 20 }}
					contentContainerStyle={Styles.scrollContainer}
				>
					{languages.map((item, index) => (
						<LanguageTab
							key={index.toString()}
							item={item.name}
							onPress={() => {}}
						/>
					))}
				</ScrollView>
				<View style={Styles.footer}>
					<TouchableOpacity
						activeOpacity={0.85}
						style={Styles.footerButton}
					>
						<Text
							style={[
								Styles.footerButtonText,
								{ color: AppStyles.colorGrey2 },
							]}
						>
							Cancel
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.85}
						style={[
							Styles.footerButton,
							{ backgroundColor: AppStyles.colorBrand1 },
						]}
					>
						<Text
							style={[
								Styles.footerButtonText,
								{ color: AppStyles.colorWhite },
							]}
						>
							Done
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
