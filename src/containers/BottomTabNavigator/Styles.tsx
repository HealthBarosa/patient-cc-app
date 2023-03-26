import {StyleSheet} from 'react-native';
import AppStyles from '@/AppStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.colorWhite,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	coverContainer: {
		position: 'relative',
		width: '100%',
	},
	coverImage: {
		width: '100%',
	},
	profileContainer: {
		position: 'absolute',
		bottom: '-20%',
		left: 0,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		//borderWidth: 1,
		//borderColor: AppStyles.colorBrand1,
	},
	profileWrapper: {
		position: 'relative',
	},
	profileText: {
		position: 'absolute',
		bottom: -10,
		alignSelf: 'center',
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 14,
		color: AppStyles.colorBrand1,
		textAlign: 'center',
		backgroundColor: AppStyles.colorGreyLight3,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	content: {
		marginTop: 80,
	},
	profileDetails: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileName: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 18,
		color: AppStyles.colorGrey2,
	},
	professionContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		//alignItems: 'center',
		gap: 5,
		marginVertical: 5,
	},
	professionName: {
		fontFamily: AppStyles.fontPoppinsSemiBold,
		fontSize: 14,
		color: AppStyles.colorGrey2,
	},
	locationContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	locationName: {
		fontFamily: AppStyles.fontPoppinsRegular,
		fontSize: 14,
		color: 'rgba(46, 46, 46, 0.7)',
	},
	contentBody: {
		paddingHorizontal: 15,
		marginBottom: 10,
		marginTop: 20,
	},
	documentContainer: {
		marginVertical: 20,
	},
	editProfileButton: {
		backgroundColor: AppStyles.colorGreyLight1,
		borderRadius: 16,
		borderColor: AppStyles.colorGreyLight2,
		borderWidth: 1,
		padding: 10,
	},
	editProfileButtonText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		fontWeight: '500',
		color: AppStyles.colorGrey2,
		paddingLeft: 9,
		textAlign: 'center',
	},
});
