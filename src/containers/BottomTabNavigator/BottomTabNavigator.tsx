import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "@/screens";

import { NavigationTree } from "@/utils";

//import Styles from './Styles';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	const screenOptions = {
		headerShown: false,
		tabBarStyle: {
			height: 56,
			/*position: 'absolute',
      bottom: 15,
      right: 15,
      left: 15, */
			/*borderTopLeftRadius: 10,
      borderTopRightRadius: 10,*/
			// backgroundColor: AppStyles.secondaryColor,
		},
	};

	return (
		<BottomTab.Navigator screenOptions={screenOptions}>
			<BottomTab.Screen
				name={NavigationTree.app.HomeScreen}
				component={HomeScreen}
			/>
		</BottomTab.Navigator>
	);
}
