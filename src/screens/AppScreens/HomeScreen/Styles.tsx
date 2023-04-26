/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 20,
	},
	completeSetupBox: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "rgba(46, 46, 46, 0.3)",
		padding: 10,
		marginBottom: 10,
	},
	completeSetupBody: {
		width: "75%",
	},
	completeSetupText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 14,
	},
	completeSetupTime: {
		fontFamily: AppStyles.fontPoppinsRegular,
		color: "rgba(46, 46, 46, 0.5)",
		fontSize: 14,
	},
	completeSetupFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginTop: 5,
	},
	completeSetupBodyStep: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 12,
		color: AppStyles.colorBrand1,
	},
	completeSetupButton: {
		backgroundColor: AppStyles.colorBrand1,
		paddingHorizontal: 16,
		paddingVertical: 5,
		borderRadius: 99,
	},
	completeSetupButtonText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		color: AppStyles.colorWhite,
	},
	bannerContainer: {},
	referContainer: {
		marginVertical: 20,
	},
	tieupCarouselContainer: {
		marginTop: 10,
	},
	howItWorkContainer: {
		marginTop: 30,
	},
	floatingButton: {
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		right: "5%",
		bottom: "5%",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 15,
		backgroundColor: AppStyles.colorBrand1,
	},
	floatingButtonText: {
		color: AppStyles.colorWhite,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		marginStart: 10,
		zIndex: 999,
	},
	bottomSheetContainer: {
		padding: 15,
	},
	bottomSheetHeader: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		textAlign: "center",
		fontSize: 16,
	},
	bottomSheetText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		color: AppStyles.colorGrey2,
		textAlign: "center",
		marginBottom: 20,
	},
	caseButton: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.3)",
		borderRadius: 15,
		paddingVertical: 18,
		paddingHorizontal: 15,
		marginBottom: 15,
	},
	bottomSheetButtonText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	bottomSheetButtonindicatorContainer: {
		width: 25,
		aspectRatio: 1,
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.3)",
		borderRadius: 99,
		padding: 3,
	},
	bottomSheetButtonindicator: {
		width: "100%",
		height: "100%",
		backgroundColor: AppStyles.colorBrand1,
		borderRadius: 99,
	},
	invitationContainer: {
		marginTop: 20,
		marginBottom: 100,
	},
	invitationContainerHeader: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 18,
	},
	codeContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.5)",
		borderRadius: 15,
		backgroundColor: AppStyles.colorGreyLight1,
		padding: 15,
	},
	codeTextContainer: {
		flexDirection: "row",
		gap: 10,
	},
	codeText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	copyContainer: {
		paddingHorizontal: 16,
		paddingVertical: 6,
		backgroundColor: AppStyles.colorBrand1,
		borderRadius: 10,
	},
	copyText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		color: AppStyles.colorWhite,
	},
	inviteButton: {
		backgroundColor: AppStyles.colorBrand1,
		width: 120,
		height: 50,
		marginTop: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	inviteButtonText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
		fontSize: 16,
	},
});
