/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	OTPScreen,
	SignInScreen,
	SignupScreen,
	TermsOfService,
} from "@/screens";
import { NavigationTree } from "@/utils";

const AuthNavigationStack = createNativeStackNavigator();

export default function AuthNavigation(): JSX.Element {
	const screenOptions = {
		headerShown: false,
	};

	return (
		<AuthNavigationStack.Navigator screenOptions={screenOptions}>
			<AuthNavigationStack.Screen
				name={NavigationTree.auth.SignupScreen}
				component={SignupScreen}
			/>
			<AuthNavigationStack.Screen
				name={NavigationTree.auth.SignInScreen}
				component={SignInScreen}
			/>
			<AuthNavigationStack.Screen
				name={NavigationTree.auth.OTPScreen}
				component={OTPScreen}
			/>
			<AuthNavigationStack.Screen
				name={NavigationTree.auth.TermsOfService}
				component={TermsOfService}
			/>
		</AuthNavigationStack.Navigator>
	);
}
