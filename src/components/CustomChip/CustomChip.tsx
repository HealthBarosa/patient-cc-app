/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import AppStyles from '../../AppStyles';

import Styles from './Styles';

export type CustomChipPropsType = {
	text: string;
	isSelected: boolean;
	onPress: () => void;
	containerStyle: StyleProp<ViewStyle>;
};

export default function CustomChip({
	text,
	isSelected,
	onPress,
	containerStyle,
}: CustomChipPropsType): JSX.Element {
	return (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			style={[
				Styles.container,
				containerStyle,
				isSelected
					? {
							borderColor: 'rgba(46, 46, 46, 0.5)',
							backgroundColor: 'rgba(138, 134, 241, 0.33)',
					  }
					: {
							borderColor: 'rgba(46, 46, 46, 0.5)',
							backgroundColor: 'transparent',
					  },
			]}
		>
			<Text style={Styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
