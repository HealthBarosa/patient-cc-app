/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {ReferralScreen} from './src/screens';

import AppStyles from './src/AppStyles';

function App(): JSX.Element {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				translucent
				barStyle="default"
				backgroundColor="transparent"
			/>
			<NavigationContainer>
				<ReferralScreen />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		padding: 10,
		backgroundColor: AppStyles.colorWhite,
	},
});

export default App;
