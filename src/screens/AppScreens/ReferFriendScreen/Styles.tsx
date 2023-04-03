import { StyleSheet } from "react-native";

import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
	},
	wrapper: {
		flexGrow: 1,
		padding: 20,
	},
	mainContent: {
		flex: 1,
	},
	banner: {
		position: "relative",
	},
	bannerContent: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		paddingHorizontal: 15,
		paddingVertical: 15,
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
		height: "100%",
	},
	bannerHeader: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 16,
		color: AppStyles.colorGrey2,
	},
	bannerText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		fontSize: 12,
		color: "rgba(46, 46, 46, 0.7)",
	},
	discountText: {
		color: AppStyles.colorBrand2,
	},
	content: {
		marginTop: 30,
	},
	workContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginLeft: 4,
	},
	workText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 16,
		color: AppStyles.colorBrand1,
	},
	progressContainer: {
		marginTop: 20,
		gap: 50,
	},
	progressStep: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15,
	},
	indicator: {
		width: 30,
		aspectRatio: 1,
		borderRadius: 999,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(138, 134, 241, 0.6)",
	},
	indicatorKnob: {
		width: 18,
		aspectRatio: 1,
		borderRadius: 999,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(138, 134, 241, 1)",
	},
	indicatorTextContainer: {},
	indicatorTextHeader: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 16,
		color: AppStyles.colorBrand1,
		lineHeight: 18,
	},
	indicatorText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 12,
		color: AppStyles.colorGrey2,
		lineHeight: 16,
	},
	progressbar: {
		position: "absolute",
		borderWidth: 1,
		borderStyle: "dashed",
		zIndex: -999,
		top: 10,
		left: 13.5,
		borderColor: AppStyles.colorGrey2,
	},
	footer: {},
	copyContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		marginBottom: 20,
	},
	copyText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 16,
		color: "rgba(46, 46, 46, 0.7)",
	},
	codeText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 16,
		color: AppStyles.colorGrey2,
	},
});
