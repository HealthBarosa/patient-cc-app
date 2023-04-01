import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 16,
	},
	text: {
		fontSize: 17,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
	},
});
