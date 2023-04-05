/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

import AppStyles from "../../../AppStyles";

export default StyleSheet.create({
	container: {
		position: 'relative',
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
	modalContainer: {
		position: 'absolute',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		top: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 99,
	},
	mask: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: '#000000',
		opacity: 0.5,
	},
	modal: {
		width: '90%',
		height: 270,
		padding: 20,
		justifyContent: 'space-between',
		//alignItems: 'center',
		borderRadius: 10,
		backgroundColor: AppStyles.colorWhite,
		zIndex: 2,
	},
	bankName: {
		fontFamily: AppStyles.fontPoppinsRegular,
		fontSize: 16,
		color: '#000000',
	},
});
