import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.5)",
		marginBottom: 20,
		padding: 10,
		backgroundColor: AppStyles.colorGreyLight1,
		borderRadius: 15,
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	bodyText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorBrand1,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},
	referButton: {
		paddingHorizontal: 12,
		paddingVertical: 5,
		borderWidth: 1,
		backgroundColor: AppStyles.colorWhite,
		borderColor: "rgba(46, 46, 46, 0.5)",
		borderRadius: 10,
	},
	applyButton: {},
	referButtonText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorGrey2,
	},
	applyButtonText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorBrand2,
	},
});
