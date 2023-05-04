import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

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
	scroll: {},
	scrollContainer: {},
	header: {},
	headerText: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontSize: 16,
	},
	headerBodyText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorGreen1,
		fontSize: 14,
		marginTop: 5,
		marginBottom: 10,
	},
});
