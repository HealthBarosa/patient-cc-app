import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

import Styles from "./Styles";

export type InputAreaPropsType = {
	Icon: SVGElement;
	activeIconColor: string;
	inactiveIconColor: string;
	width: number | string;
	height: number | string;
	keyboardType: TextInputProps;
	focusedColor?: string;
	blurredColor?: string;
	showWarning?: boolean;
	warningColor?: string;
	warningIcon?: SVGElement;
	warningMessage?: string;
};

export default function InputArea(): JSX.Element {
	return (
		<View style={Styles.container}>
			<View style={Styles.inputContainer}>
				<TextInput />
			</View>
			<Text>InputArea</Text>
		</View>
	);
}
