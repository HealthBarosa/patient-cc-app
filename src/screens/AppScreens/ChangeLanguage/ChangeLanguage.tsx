/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import { SearchContainer } from "../../../containers";
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
				<SearchContainer
					containerStyle={{
						borderRadius: 14,
						backgroundColor: AppStyles.colorGreyLight3,
					}}
					iconWidth={16}
					iconHeight={16}
					placeholder="Search Languages"
					value=""
					onChangeValue={() => {}}
					iconContainerStyle={{ width: "10%" }}
					inputContainerStyle={{ width: "87%" }}
					inputStyle={{
						fontFamily: AppStyles.fontPoppinsMedium,
						fontSize: 14,
					}}
				/>
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
