/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 10,
		borderRadius: 20,
		backgroundColor: AppStyles.colorBrand1,
	},
	text: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 14,
		color: AppStyles.colorWhite,
	},
});
