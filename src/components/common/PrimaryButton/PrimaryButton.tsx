import React from "react";
import { TouchableOpacity, Text } from "react-native";

import Styles from "./Styles";

interface PrimaryButtonPropsType
	extends React.ComponentProps<typeof TouchableOpacity> {
	children: React.ReactNode;
	backgroundColor: string;
	disabled?: boolean;
}
/**
 * This is a Primary Button component which is used to render a button with a primary color
 * @param {PrimaryButtonPropsType} backgroundColor - This is the background color of the button
 * @param {PrimaryButtonPropsType} children - This is the text to be displayed on the button
 * @param {PrimaryButtonPropsType} ...primaryButtonProps - This is the rest of the props that are passed to the TouchableOpacity component
 * @example
 * <PrimaryButton onPress={() => handleClicked()} backgroundColor={AppStyles.colorBrand1}>Continue</PrimaryButton>
 */
export default function PrimaryButton({
	children,
	backgroundColor,
	disabled,
	...primaryButtonProps
}: PrimaryButtonPropsType) {
	return (
		<TouchableOpacity
			activeOpacity={0.85}
			{...primaryButtonProps}
			style={[Styles.container, { backgroundColor: backgroundColor }, disabled && { opacity: 0.7 }]}
			disabled={disabled}
		>
			<Text style={Styles.text}>{children}</Text>
		</TouchableOpacity>
	);
}
