import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		alignItems: "center",
	},
	text: {
		fontSize: 12,
		fontFamily: AppStyles.fontPoppinsMedium,
		fontWeight: "400",
	},
});
