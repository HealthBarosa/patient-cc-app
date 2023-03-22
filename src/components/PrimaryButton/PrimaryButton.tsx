import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Styles from './Styles';

export type PrimaryButtonPropsType = {
	text: string;
	backgroundColor: string;
	onPress: () => void;
};

export default function PrimaryButton({
	text,
	backgroundColor,
	onPress,
}: PrimaryButtonPropsType): JSX.Element {
	return (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			style={[Styles.container, {backgroundColor: backgroundColor}]}
		>
			<Text style={Styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
