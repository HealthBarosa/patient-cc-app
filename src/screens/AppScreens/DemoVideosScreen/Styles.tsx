import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	header: {},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 18,
	},
	headerBodyText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		color: "rgba(46, 46, 46, 0.7)",
		fontSize: 14,
	},
});
