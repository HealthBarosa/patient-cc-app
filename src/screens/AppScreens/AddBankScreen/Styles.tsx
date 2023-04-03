/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		//padding: 10,
		paddingBottom: 120,
		backgroundColor: AppStyles.colorWhite,
	},
	wrapper: {
		flex: 1,
		padding: 20,
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 18,
		color: AppStyles.colorGrey2,
	},
	subHeaderText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 14,
		color: "rgba(46, 46, 46, 0.7)",
	},
	searchbarContainer: {
		marginVertical: 25,
	},
	bankOptionContainer: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 10,
	},
	optionContainer: {
		width: "22%",
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
	},
	iconContainer: {
		marginBottom: 7,
	},
	iconText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 12,
		color: AppStyles.colorGrey2,
	},
});
