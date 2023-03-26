import { StyleSheet, Dimensions } from "react-native";

import AppStyles from "../../../AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: AppStyles.colorWhite,
	},
	imageWrapper: {
		width: "100%",
		height: Dimensions.get("window").height * 0.4,
		alignItems: "center",
		justifyContent: "center",
	},
	contentWrapper: {
		width: "100%",
		height: Dimensions.get("window").height * 0.6,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: 10,
	},
	headerTextContainer: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	inputContainer: {
		width: "90%",
		height: 56,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		paddingLeft: 7,
		borderRadius: 10,
		backgroundColor: "rgba(217, 217, 217, 0.19)",
	},
	inputIcon: {
		width: "10%",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		width: "90%",
		height: "100%",
		paddingLeft: 5,
		fontFamily: AppStyles.fontManropeSemiBold,
		fontSize: 16,
		color: "rgba(46, 46, 46, 0.87)",
	},
	referralContentWrapper: {
		width: "90%",
		height: 170,
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-around",
		padding: 10,
		borderRadius: 10,
		backgroundColor: "rgba(217, 217, 217, 0.19)",
	},
	referralContentText: {
		marginTop: 10,
		fontFamily: AppStyles.fontPoppinsRegular,
		color: "rgba(46, 46, 46, 0.7)",
		fontSize: 14,
	},
});
