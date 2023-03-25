import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Styles from './Styles';

export type LanguageTabPropsType = {
	item: string;
	onPress: () => void;
};

export default function LanguageTab({
	item,
	onPress,
}: LanguageTabPropsType): JSX.Element {
	return (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			style={Styles.container}
		>
			<Text style={Styles.text}>{item}</Text>
		</TouchableOpacity>
	);
}
