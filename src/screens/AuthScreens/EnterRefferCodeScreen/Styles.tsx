import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		backgroundColor: AppStyles.colorWhite,
		color: "black",
		paddingTop: 68,
		paddingHorizontal: 32,
	},
	headerTextContainer: {
		marginTop: 32,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontManropeExtraBold,
	},
	headerText2: {
		fontSize: 24,
		fontWeight: "bold",
		color: AppStyles.colorBrand1,
		fontFamily: AppStyles.fontManropeExtraBold,
	},
	subHeaderText: {
		fontSize: 16,
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontPoppinsMedium,
		opacity: 0.5,
	},
	inputField: {
		marginTop: 25,
		width: "100%",
		height: 50,
		borderRadius: 16,
		borderWidth: 1,
		backgroundColor: AppStyles.colorGreyLight1,
		paddingLeft: 50,
		paddingHorizontal: 30,
		fontSize: 15,
		fontFamily: AppStyles.fontManropeSemiBold,
		color: AppStyles.colorDark2,
		borderColor: AppStyles.colorDark1,
	},
	keyboardAvoidingView: {
		paddingBottom: 50,
	},
	btnContainer: {
		marginTop: 50,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: AppStyles.colorWhite,
		fontFamily: AppStyles.fontManropeBold,
	},
	noCodeText: {
		fontSize: 16,
		color: AppStyles.colorGrey2,
		opacity: 0.5,
		textAlign: "center",
		fontFamily: AppStyles.fontManropeSemiBold,
		padding: 10,
		marginTop: 20,
	},
});
