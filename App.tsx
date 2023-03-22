/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {ReferralScreen} from './src/screens';

import AppStyles from './src/AppStyles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OTPScreen, SignupScreen} from './src/screens';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	});

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
