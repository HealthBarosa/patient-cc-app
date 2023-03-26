import {Dimensions, StyleSheet} from 'react-native';

import AppStyles from '@/AppStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		backgroundColor: AppStyles.colorWhite,
	},
	imageWrapper: {
		width: '100%',
		height: Dimensions.get('window').height * 0.4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentWrapper: {
		width: '100%',
		height: Dimensions.get('window').height * 0.4,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	headerText: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
	customChipContainer: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginTop: 20,
	},
});
