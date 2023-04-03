/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native";

import Styles from "./Styles";

import SearchIcon from "../../constants/svg/icons/Search.svg";

export type SearchContainerPropsType = {
	containerStyle: StyleProp<ViewStyle>;
	iconWidth?: number;
	iconHeight?: number;
	placeholder: string;
	inputStyle?: StyleProp<TextStyle>;
	iconContainerStyle?: StyleProp<ViewStyle>;
	inputContainerStyle?: StyleProp<ViewStyle>;
	value: string;
	onChangeValue: () => void;
};

export default function SearchContainer({
	containerStyle,
	iconWidth = 15,
	iconHeight = 15,
	placeholder,
	inputContainerStyle,
	iconContainerStyle,
	inputStyle,
	value,
	onChangeValue,
}: SearchContainerPropsType): JSX.Element {
	return (
		<View style={[Styles.container, containerStyle]}>
			<View style={[Styles.iconContainer, iconContainerStyle]}>
				<SearchIcon width={iconWidth} height={iconHeight} />
			</View>
			<View style={[Styles.inputContainer, inputContainerStyle]}>
				<TextInput
					style={[Styles.input, inputStyle]}
					value={value}
					onChangeText={onChangeValue}
					placeholder={placeholder}
					keyboardType="default"
				/>
			</View>
		</View>
	);
}
