import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		padding: 20,
		marginBottom: 130,
	},

	mainText: {
		fontSize: 13,
		lineHeight: 24,
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontPoppinsMedium,
	},
	headingText: {
		fontSize: 16,
		lineHeight: 24,
		color: AppStyles.colorDark1,
		fontFamily: AppStyles.fontPoppinsBold,
	},

	btnContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		gap: 10,
	},
});
