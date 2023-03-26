import { Dimensions, StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
	},
	subPlanContainer: {
		marginTop: 54,
		borderColor: AppStyles.colorBrand1,
		borderWidth: 3,
		borderRadius: 10,
		padding: 15,
	},
	subPlanText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 18,
		lineHeight: 24,
		color: AppStyles.colorDark1,
	},
	planBox: {
		backgroundColor: AppStyles.colorBrandLight1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
	planText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 10,
		color: AppStyles.colorDark1,
	},
	planContainer1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	planPriceText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 25,
		color: AppStyles.colorDark1,
	},
	planPriceTextContainer: {
		// borderBottomColor: AppStyles.colorBrandLight1,
		// borderBottomWidth: 3,
		marginTop: 32,
	},
	primePromoText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 15,
		color: "#000000",
		alignItems: "center",
	},
	primeTextContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: 10,
	},
	primeContainer: {
		marginTop: 26,
		rowGap: 20,
		borderBottomColor: AppStyles.colorBrandLight1,
		borderBottomWidth: 3,
		borderTopColor: AppStyles.colorBrandLight1,
		borderTopWidth: 3,
		paddingVertical: 20,
	},
	commingSoonText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		fontSize: 15,
		color: AppStyles.colorGreen1,
		textAlign: "center",
	},
	commingSoonContainer: {
		backgroundColor: AppStyles.colorGreen2,
		alignItems: "center",
		borderRadius: 5,
		paddingVertical: 2,
		paddingHorizontal: 5,
		marginLeft: 5,
		transform: [{ translateY: 8 }, { translateX: 50 }],
	},
	planRenewDateText: {
		fontFamily: AppStyles.fontPoppinsRegular,
		fontSize: 13,
		color: AppStyles.colorDark1,
		marginTop: 20,
	},
	cancelSubscriptionButton: {
		borderColor: AppStyles.colorBrand1,
		borderWidth: 2,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		marginTop: windowHeight * 0.05,
	},
	cancelSubscriptionText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 15,
		color: AppStyles.colorDark1,
	},
	getPrimeButton: {
		backgroundColor: "#FB8315",
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		marginTop: windowHeight * 0.05,
	},
	getPrimeBtnText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 15,
		color: AppStyles.colorWhite,
	},
});
