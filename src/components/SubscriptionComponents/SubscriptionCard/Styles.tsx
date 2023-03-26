import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";

export default StyleSheet.create({
	innerContainer: {
		backgroundColor: AppStyles.colorBrandLight1,
		borderRadius: 20,
		padding: 20,
		width: "100%",
		height: 165,
	},
	imageContainer: {
		position: "absolute",
		right: 0,
		borderTopRightRadius: 20,
	},
	headingText: {
		fontSize: 22,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontWeight: "bold",
		width: 200,
		marginBottom: 5,
	},
	subHeadingText: {
		fontSize: 14,
		fontFamily: AppStyles.fontPoppinsRegular,
		color: AppStyles.colorGrey2,
		width: 200,
	},
	premiumMemberCard: {
		backgroundColor: AppStyles.colorBrand1,
		padding: 10,
		borderRadius: 100,
		display: "flex",
		flexDirection: "row",
		width: 150,
		alignItems: "center",
		marginTop: 16,
	},
	premiumMemberText: {
		fontSize: 12,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
		transform: [{ translateY: 1 }],
		marginLeft: 5,
	},
});
