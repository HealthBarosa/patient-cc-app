import React from 'react';
import {View, TextInput} from 'react-native';

import Styles from './Styles';

import SearchIcon from '../../constants/svg/icons/Search.svg';

export default function LanguageSearchContainer() {
	return (
		<View style={Styles.container}>
			<View style={Styles.iconContainer}>
				<SearchIcon width={15} height={15} />
			</View>
			<TextInput
				style={Styles.input}
				placeholder="Search languages"
				keyboardType="default"
			/>
		</View>
	);
}
