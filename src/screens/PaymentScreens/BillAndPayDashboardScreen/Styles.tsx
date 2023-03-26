import { StyleSheet } from "react-native";
import AppStyles from "../../../AppStyles";

export default StyleSheet.create({
	billCardContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	billOptionSectionContainer: {
		marginHorizontal: 24,
		marginTop: 35,
	},
	heading2Text: {
		fontSize: 18,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	buttonContainer: {
		marginTop: 24,
		marginHorizontal: 24,
	},
});
