import React from "react";
import { StyleProp, ViewStyle, Text, TouchableOpacity } from "react-native";

import Styles from "./Styles";

export type ReferButtonPropsType = {
	text: string;
	onPress: () => void;
	containerStyle: StyleProp<ViewStyle>;
};

export default function ReferButton({
	text,
	onPress,
	containerStyle,
}: ReferButtonPropsType): JSX.Element {
	return (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			style={[Styles.container, containerStyle]}
		>
			<Text style={Styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
