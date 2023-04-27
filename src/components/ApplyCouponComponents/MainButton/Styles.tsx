import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: "100%",
		paddingVertical: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 14,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "rgba(46, 46, 46, 0.5)",
		backgroundColor: AppStyles.colorGreyLight1,
	},
	buttonText: {
		fontFamily: AppStyles.fontManropeBold,
		color: AppStyles.colorGrey2,
		fontSize: 16,
	},
});
