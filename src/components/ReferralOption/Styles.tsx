import { StyleSheet } from "react-native";

import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		fontSize: 18,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	radioButtonContainer: {
		width: 24,
		aspectRatio: 1,
		borderRadius: 999,
		borderWidth: 1.75,
		borderColor: "rgba(46, 46, 46, 0.5)",
		padding: 2.5,
	},
	button: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 999,
	},
});
