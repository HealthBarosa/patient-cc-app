/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		paddingVertical: 20,
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.3)",
		backgroundColor: AppStyles.colorGreyLight1,
		paddingHorizontal: 20,
		borderRadius: 20,
		marginBottom: 20,
	},
	text: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 20,
		color: AppStyles.colorGrey2,
	},
});
