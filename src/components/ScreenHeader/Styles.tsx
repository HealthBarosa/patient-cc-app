/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingTop: 50,
		paddingHorizontal: 10,
		paddingBottom: 15,
		backgroundColor: AppStyles.colorBrand1,
	},
	text: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 18,
		color: AppStyles.colorWhite,
	},
});
