import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		marginTop: 25,
		marginHorizontal: 18,
		borderBottomColor: AppStyles.colorBrandLight1,
		borderBottomWidth: 3,
		borderStyle: "dotted",
	},
	headtingText: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontWeight: "bold",
		width: 200,
		marginBottom: 13,
	},
	sectionContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 5,
	},
	sectionHeadingText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorGrey2,
	},
	sectionDetailsText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorGreyLight2,
	},
	ammountText: {
		fontSize: 20,
		color: AppStyles.colorBrand1,
		fontFamily: AppStyles.fontPoppinsSemiBold,
	},
});
