import AppStyles from "@/AppStyles";
import { Dimensions, StyleSheet } from "react-native";

const deviceHieght = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		marginVertical: 42,
		marginHorizontal: 20,
	},
	headingText: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorDark1,
		fontWeight: "600",
	},
	normalText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorDark1,
		fontWeight: "400",
	},
	blueTagsContiner: {
		backgroundColor: AppStyles.colorBlue,
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		alignItems: "center",
	},
	blueTagText: {
		fontSize: 12,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorDark1,
		fontWeight: "400",
	},
	topContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	violetTagsContiner: {
		backgroundColor: AppStyles.colorVioletLight1,
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		alignItems: "center",
	},
	violetTagText: {
		fontSize: 12,
		fontFamily: AppStyles.fontPoppinsMedium,
		color: AppStyles.colorDark1,
		fontWeight: "400",
	},
	bottomTagContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 15,
		marginTop: 19,
	},
	headingTextBottom: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorDark1,
		fontWeight: "600",
		marginTop: deviceHieght * 0.13,
	},
	bottomBorder: {
		borderBottomWidth: 1,
		borderBottomColor: AppStyles.colorGreyLight4,
	},
});
