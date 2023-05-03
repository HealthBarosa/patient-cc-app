import React from "react";
import { View, Text } from "react-native";

import WarningIcon from "@/constants/svg/icons/WarningIcon.svg";

import Styles from "./Styles";

export interface IWarningBannerProps {
	warning: string;
	message: string;
}

export default function WarningBanner({
	warning,
	message,
}: IWarningBannerProps): JSX.Element {
	return (
		<View style={Styles.container}>
			<WarningIcon />
			<View>
				<Text style={Styles.warningText}>{warning}</Text>
				<Text style={Styles.warningBodyText}>{message}</Text>
			</View>
		</View>
	);
}
