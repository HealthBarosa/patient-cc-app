import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		backgroundColor: AppStyles.colorWhite,
		color: "black",
		paddingTop: 183,
		paddingHorizontal: 32,
	},
	headerText: {
		fontSize: 30,
		fontFamily: AppStyles.fontManropeBold,
		fontWeight: "bold",
		color: AppStyles.colorGrey2,
	},
	subHeaderText: {
		fontSize: 19,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGreyLight2,
	},
	textInputField: {
		width: "100%",
		height: 50,
		borderRadius: 16,
		borderWidth: 1,
		backgroundColor: AppStyles.colorGreyLight1,
		paddingLeft: 50,
		paddingHorizontal: 18,
		fontSize: 15,
		fontFamily: AppStyles.fontManropeSemiBold,
		color: AppStyles.colorDark2,
		borderColor: AppStyles.colorDark1,
	},
	inputContainer: {
		rowGap: 24,
		marginTop: 32,
		marginBottom: 62,
	},
	inputFieldContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	inputIcon: {
		width: "10%",
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		transform: [{ translateX: 15 }],
		zIndex: 1,
	},

	alreadyAccountText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGreyLight2,
		textAlign: "center",
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	loginText: {
		color: AppStyles.buttonBlue1,
		fontSize: 16,
		fontFamily: AppStyles.fontManropeBold,
		transform: [{ translateY: 2 }],
	},
	loginPlaceholderContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	loginWithPlaceholderText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGreyLight2,
		textAlign: "center",
		paddingHorizontal: 16,
	},
});
