import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: AppStyles.colorWhite,
		alignItems: "center",
	},
	coverImage: {
		width: "100%",
		// height: 300,
	},
	headerTextContainer: {
		marginTop: 32,
		gap: 4,
	},
	headerText: {
		fontSize: 22,
		fontWeight: "800",
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontManropeExtraBold,
		textAlign: "center",
	},
	subText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorGreyLight2,
		textAlign: "center",
	},
	subTextHightLight: {
		color: AppStyles.colorBrand1,
		opacity: 1,
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 16,
		marginTop: 41,
	},
	button: {
		backgroundColor: AppStyles.colorGreyLight5,
		opacity: 0.7,
		paddingHorizontal: 40,
		paddingVertical: 16,
		borderRadius: 16,
		borderWidth: 1,
		borderBottomColor: AppStyles.colorDark1,
	},
	buttonText: {
		color: AppStyles.colorGrey2,
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		fontWeight: "500",
	},
});
