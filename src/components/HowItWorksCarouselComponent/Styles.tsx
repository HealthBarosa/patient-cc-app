/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { Dimensions, StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	imageBackground: {
		// width: Dimensions.get('window').width * 0.8,
		height: 180,
		aspectRatio: 16 / 9,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		//backgroundColor: 'red',
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 14,
		color: AppStyles.colorGrey2,
	},
	playContainer: {
		width: 50,
		alignItems: "center",
		justifyContent: "center",
		aspectRatio: 1,
		backgroundColor: AppStyles.colorWhite,
		opacity: 0.5,
		borderRadius: 999,
	},
});
