/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 20,
		marginBottom: 10,
	},
	bannerContainer: {},
	referContainer: {
		marginVertical: 20,
	},
	tieupCarouselContainer: {},
	howItWorkContainer: {
		marginTop: 30,
	},
});
