import React from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import AppStyles from "@/AppStyles";
import { BackIcon } from "@/constants/svg/common";
import Styles from "./Styles";

interface NavHeaderProps {
	headerName: string;
	navigation?: any;
}
/**
 * This is a NavHeader component which is used to render a header for the screen
 * @param {string} headerName - This is the name of the header
 * @example
 * <NavHeader headerName={'Bills & Payment'} />
 */
const NavHeader = ({ headerName,navigation }: NavHeaderProps) => {

	const handleBackPress = () => {
		navigation.goBack();
	};

	return (
		<View style={Styles.headerContainer}>
			<StatusBar
				backgroundColor={AppStyles.colorBrand1}
				translucent
				barStyle="light-content"
			/>
			<Pressable onPress={() => handleBackPress()}>
				<BackIcon />
			</Pressable>

			<Text style={Styles.headerText}>{headerName}</Text>
		</View>
	);
};

export default NavHeader;
