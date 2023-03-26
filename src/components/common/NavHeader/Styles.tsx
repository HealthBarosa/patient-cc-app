import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		backgroundColor: AppStyles.colorBrand1,
		alignItems: "center",
		padding: 24,
		paddingTop: 31,
		paddingBottom: 19,
		marginTop: 31,
		width: "150%",
	},
	headerText: {
		color: AppStyles.colorWhite,
		fontSize: 18,
		fontFamily: AppStyles.fontPoppinsMedium,
		transform: [{ translateY: 2 }],
		marginLeft: 17,
	},
});
