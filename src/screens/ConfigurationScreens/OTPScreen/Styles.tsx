import {StyleSheet} from 'react-native';
import AppStyles from '../../../AppStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		flexDirection: 'column',
		backgroundColor: AppStyles.colorWhite,
		color: 'black',
		paddingTop: 68,
		paddingHorizontal: 32,
	},
	headerText: {
		fontSize: 30,
		fontFamily: AppStyles.fontManropeBold,
		fontWeight: 'bold',
		color: AppStyles.colorGrey2,
		textAlign: 'center',
		marginTop: 83,
	},
	subHeaderText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGreyLight2,
		textAlign: 'center',
		marginTop: 16,
	},
	phoneNumberText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGrey2,
		textAlign: 'center',
		marginTop: 16,
		fontWeight: 'bold',
	},
	resendCodeText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGreyLight2,
		textAlign: 'center',
		// marginTop: 100,
	},
	resendCodeTimerText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: '#9154A6',
	},
	resendOTPButtonContainer: {
		// marginTop: 100,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	resendOTPButton: {
		color: AppStyles.colorGrey2,
		backgroundColor: AppStyles.colorGreyLight1,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		width: '60%',
		paddingVertical: 16,
	},
	resendOTPButtonText: {
		fontSize: 16,
		fontFamily: AppStyles.fontManropeRegular,
		color: AppStyles.colorGrey2,
	},
});
