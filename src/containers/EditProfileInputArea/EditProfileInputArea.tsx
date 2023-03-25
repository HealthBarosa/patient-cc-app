/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
	View,
	TextInput,
	StyleProp,
	ViewStyle,
	Text,
	Pressable,
} from 'react-native';

import Styles from './Styles';

export type EditProfileInputAreaPropsType = {
	label: string;
	value: string;
	placeholder: string;
	keyboardType: string;
	buttonText?: string;
	isPassword?: boolean;
	buttonOnPress?: () => void;
	containerStyle: StyleProp<ViewStyle>;
};

export default function EditProfileInputArea({
	label,
	placeholder,
	value,
	keyboardType,
	buttonText,
	buttonOnPress,
	containerStyle,
	isPassword,
}: EditProfileInputAreaPropsType): JSX.Element {
	return (
		<View style={[Styles.container, containerStyle]}>
			<Text style={Styles.label}>{label}</Text>
			<View style={Styles.inputContainer}>
				<TextInput
					placeholder={placeholder}
					value={value}
					keyboardType={keyboardType}
					secureTextEntry={isPassword}
					style={[Styles.input, {width: buttonText ? '85%' : '100%'}]}
				/>
				{buttonText && (
					<Pressable onPress={buttonOnPress} style={Styles.btn}>
						<Text style={Styles.btnText}>{buttonText}</Text>
					</Pressable>
				)}
			</View>
		</View>
	);
}
