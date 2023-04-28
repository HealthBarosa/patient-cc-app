import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		padding: 10,
		height: "100%",
		backgroundColor: AppStyles.colorWhite,
	},
	headerTextContainer: {
		marginTop: 50,
		padding: 10,
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
		width: "80%",
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontManropeExtraBold,
	},
	wrapper: {
		// flex: 1,
		paddingHorizontal: 20,
		// marginTop: 20,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	doubleInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		marginBottom: 25,
	},
});
