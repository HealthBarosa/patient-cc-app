import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: AppStyles.colorWhite,
	},
	headerTextContainer: {
		marginTop: 100,
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
		width: "90%",
		marginTop: 10,
	},
	sectionText: {
		fontSize: 18,
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontPoppinsSemiBold,
	},
	sectionSideBar: {
		width: 5,
		height: 20,
		backgroundColor: AppStyles.colorBrand1,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		marginRight: 10,
	},
	wrapSectonText: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 31,
	},
	professionTabWrapper: {
		// make a grid with 2 rows and 3 columns
		width: "93%",
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 20,
		gap: 13,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	professionTabButton: {
		backgroundColor: AppStyles.colorWhite,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: AppStyles.colorGrey2,
		alignItems: "center",
	},
	professionText: {
		fontSize: 18,
		color: AppStyles.colorGrey2,
		fontFamily: AppStyles.fontPoppinsSemiBold,
	},
	searchInput: {
		marginTop: 30,
		width: "100%",
		color: AppStyles.colorGrey2,
		borderBottomWidth: 1,
		fontSize: 18,
	},
	keyboardAvoidingView: {
		paddingBottom: 50,
	},
});
