/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AppStyles from "@/AppStyles";
import Styles from "./Styles";

export type ReferralOptionPropsType = {
	isActive: boolean;
	text: string;
	onPress: () => void;
};

export default function ReferralOption({
	isActive,
	text,
	onPress,
}: ReferralOptionPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<Text style={Styles.text}>{text}</Text>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={onPress}
				style={Styles.radioButtonContainer}
			>
				<View
					style={[
						Styles.button,
						isActive
							? { backgroundColor: AppStyles.colorBrand1 }
							: { backgroundColor: "transparent" },
					]}
				/>
			</TouchableOpacity>
		</View>
	);
}
