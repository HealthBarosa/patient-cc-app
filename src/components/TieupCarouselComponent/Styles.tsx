/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		width: 180,
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.5)",
		borderRadius: 10,
		padding: 5,
		backgroundColor: "#F7F2F2",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		resizeMode: "cover",
	},
	content: {
		marginTop: 10,
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 14,
		color: AppStyles.colorGrey2,
	},
	starContainer: {
		width: 20,
		aspectRatio: 1,
	},
	reviewContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		marginVertical: 5,
	},
	reviewText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 12,
		color: "rgba(46, 46, 46, 0.7)",
	},
	locationContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 3,
		gap: 5,
		marginBottom: 10,
	},
});
