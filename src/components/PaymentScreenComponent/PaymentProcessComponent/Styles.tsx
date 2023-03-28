import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
		gap: 18,
	},

	uncheckedCircle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: AppStyles.colorGreyLight4,
		alignItems: "center",
		justifyContent: "center",
	},
	ongoingCircle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: AppStyles.colorBrand1,
		alignItems: "center",
		justifyContent: "center",
	},
	ongoingCircleInner: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: AppStyles.colorBrand1,
	},
	textStyle: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 17,
		transform: [{ translateY: 0.5 }],
	},
	pendingText: {
		color: AppStyles.colorGreyLight4,
	},
	completedText: {
		color: AppStyles.colorGreen3,
	},
	ongoingText: {
		color: AppStyles.colorBrand1,
	},
});
