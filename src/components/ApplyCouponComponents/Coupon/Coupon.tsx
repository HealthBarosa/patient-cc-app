import React from "react";
import { View, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Styles from "./Styles";

interface ICouponType {
	code: string;
	value: string;
	onPressReferPatient: () => void;
	onPressApply: () => void;
}

export default function Coupon({
	code,
	value,
	onPressApply,
	onPressReferPatient,
}: ICouponType): JSX.Element {
	return (
		<View style={Styles.container}>
			<Text style={Styles.headerText}>{code.toUpperCase()}</Text>
			<Text style={Styles.bodyText}>
				Tap to apply and get {value} discount
			</Text>
			<View style={Styles.footer}>
				<TouchableOpacity style={Styles.referButton}>
					<Text style={Styles.referButtonText}>Refer patient</Text>
				</TouchableOpacity>
				<Pressable style={Styles.applyButton}>
					<Text style={Styles.applyButtonText}>Tap to apply</Text>
				</Pressable>
			</View>
		</View>
	);
}
