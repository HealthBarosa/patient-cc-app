import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenHeader } from "@/components";

import Styles from "./Styles";


export default function ReferCaseScreen(): JSX.Element {
	const navigation = useNavigation()

	function onPressGoBack() {
		navigation.goBack()
	}
	
	return (
		<View style={Styles.container} >
			{/* status bar */}
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			{/* header */}
			<ScreenHeader screenName="Previous Cure" onPress={onPressGoBack} />
			<Text>ReferCaseScreen</Text>
		</View>
	);
}

