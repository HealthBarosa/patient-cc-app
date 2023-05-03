import React from "react";
import {
	View,
	TextInput,
	StyleProp,
	ViewStyle,
	Text,
	Pressable,
} from "react-native";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";

interface EditProfileInputAreaPropsType<T>
	extends React.ComponentProps<typeof TextInput> {
	label: string;
	value?: string;
	valueOf: keyof T;
	buttonText?: string;
	buttonOnPress?: () => void;
	containerStyle: StyleProp<ViewStyle>;
	/**
	 * Used to set the state of the parent component
	 */
	setUserDetials?: React.Dispatch<React.SetStateAction<T>>;
}

export default function EditProfileInputArea<T>({
	label,
	value,
	valueOf,
	buttonText,
	buttonOnPress,
	containerStyle,
	setUserDetials,
	...EditInputProps
}: EditProfileInputAreaPropsType<T>): JSX.Element {
	return (
		<View style={[Styles.container, containerStyle]}>
			<Text style={Styles.label}>{label}</Text>
			<View style={Styles.inputContainer}>
				<TextInput
					value={value}
					{...EditInputProps}
					placeholderTextColor={AppStyles.colorGrey1}
					onChange={(text) => {
						setUserDetials &&
							setUserDetials((prevState) => ({
								...prevState,
								[valueOf]: text.nativeEvent.text,
							}));
					}}
					style={[
						Styles.input,
						{ width: buttonText ? "85%" : "100%" },
					]}
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
