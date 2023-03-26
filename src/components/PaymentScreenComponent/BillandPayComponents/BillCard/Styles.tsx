import {StyleSheet} from 'react-native';
import AppStyles from '@/AppStyles';

export default StyleSheet.create({
	container: {
		backgroundColor: AppStyles.colorWhite,
		width: 327,
		height: 230,
		borderRadius: 20,
		padding: 3,
		marginTop: 15,
		elevation: 10, // For Android devices
		shadowColor: '#000', // For iOS devices
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	innerContainer: {
		backgroundColor: AppStyles.colorBrandLight1,
		borderRadius: 20,
		padding: 20,
		width: '100%',
		height: 138,
	},
	headingText: {
		fontSize: 22,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
		fontWeight: 'bold',
		width: 200,
	},
	subHeadingText: {
		fontSize: 14,
		fontFamily: AppStyles.fontPoppinsRegular,
		color: AppStyles.colorGrey2,
	},
	imageContainer: {
		position: 'absolute',
		right: 0,
		borderTopRightRadius: 20,
	},
	ammountContainer: {
		padding: 14,
	},
	ammountText: {
		fontSize: 15,
		color: AppStyles.colorBrand1,
		fontFamily: AppStyles.fontPoppinsSemiBold,
	},
	lastpaidText: {
		fontSize: 15,
		color: AppStyles.colorGreyLight2,
		fontFamily: AppStyles.fontPoppinsRegular,
	},
	dueText: {
		fontSize: 20,
		color: AppStyles.colorRed1,
		fontFamily: AppStyles.fontPoppinsSemiBold,
	},
});
