import React, { useState } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenHeader, WarningBanner } from "@/components";

import Styles from "./Styles";

export default function DemoVideosScreen(): JSX.Element {
	const navigation = useNavigation();
	const [videos, setVideos] = useState<[]>([]);

	function onPressGoBack() {
		navigation.goBack();
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
			<ScreenHeader screenName="Demo Videos" onPress={onPressGoBack} />

			{/* body */}
			<View style={Styles.wrapper}>
				{/* body header */}
				<View style={Styles.header}>
					<Text style={Styles.headerText}>Watch Tutorials</Text>
					<Text style={Styles.headerBodyText}>
						Stream some of the videos to get a better idea about the
						app.
					</Text>
				</View>

				{/* videos */}
				{videos?.length <= 0 ? (
					<WarningBanner
						warning="No new videos available!"
						message="Hold tight for upcoming video tutorials."
					/>
				) : (
					<ScrollView></ScrollView>
				)}
			</View>
		</View>
	);
}
