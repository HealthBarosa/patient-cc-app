/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";

import AppStyles from "@/AppStyles";
import { PaymentHistory } from "@/screens";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	});

	return (
		<View style={styles.container}>
			<StatusBar
				translucent
				barStyle="default"
				backgroundColor="transparent"
			/>
			<NavigationContainer>
				{/* <AppNavigation /> */}
				<PaymentHistory />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		backgroundColor: AppStyles.colorWhite,
	},
});

export default App;
