import { StyleSheet } from "react-native/";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	container: {
		flex: 1,
		//padding: 10,
		paddingBottom: 120,
		backgroundColor: AppStyles.colorWhite,
	},
	contentWrapper: {
		padding: 20,
	},
	scrollContainer: {
		flexGrow: 1,
	},
});
