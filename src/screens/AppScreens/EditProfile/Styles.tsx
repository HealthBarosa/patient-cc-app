/* eslint-disable prettier/prettier */
import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		//padding: 10,
		backgroundColor: AppStyles.colorWhite,
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 20,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	doubleInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		marginBottom: 25,
	},
});
