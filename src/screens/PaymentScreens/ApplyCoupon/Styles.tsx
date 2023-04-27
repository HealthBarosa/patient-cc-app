import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	scrollContainer: {
		columnGap: 20,
	},
});
