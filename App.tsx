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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalProvider } from "@gorhom/portal";

// import AppStyles from "@/AppStyles";
import { AppNavigation } from "@/navigations";
import { PaymentHistory, PaymentProcessScreen } from "./src/screens";
import { AuthNavigation } from "@/navigations";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	});

	const isLoggedIn = false;

	return (
		<PortalProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<View style={styles.container}>
					<StatusBar
						translucent
						barStyle="default"
						backgroundColor="transparent"
					/>
					<NavigationContainer>
						<AppNavigation />
						{/*<PaymentProcessScreen />*/}
						{/* <PaymentHistory /> */}
					</NavigationContainer>
				</View>
			</GestureHandlerRootView>
		</PortalProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default App;
