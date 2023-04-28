/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { Dimensions, StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		width: Dimensions.get('window').width * 0.5 - 25,
		borderWidth: 1,
		borderColor: "rgba(46, 46, 46, 0.5)",
		borderRadius: 10,
		padding: 5,
		backgroundColor: "#F7F2F2",
		overflow: "hidden",
		marginVertical: 3,
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
	bodyText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 12,
		color: "rgba(46, 46, 46, 0.7)",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 3
	},
	priceText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorBrand2,
		fontSize: 14,
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
