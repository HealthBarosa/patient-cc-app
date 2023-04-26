import AppStyles from "@/AppStyles";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	blurView: {
		position: "absolute",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	content: {
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginTop: 20,
		textAlign: "center",
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
});
