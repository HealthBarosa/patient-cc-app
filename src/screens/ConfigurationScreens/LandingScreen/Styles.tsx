import AppStyles from "@/AppStyles";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	imageWrapper: {
		width: "100%",
		height: Dimensions.get("window").height * 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	optionWrapper: {
		width: "100%",
		height: Dimensions.get("window").height * 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	optionsContainer: {
		width: "80%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 40,
	},
	option: {
		width: 120,
		height: 150,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		borderWidth: 1,
		borderRadius: 25,
	},
	optionText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 16,
		color: AppStyles.colorGrey2,
	},
});
