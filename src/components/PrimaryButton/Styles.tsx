import {StyleSheet} from 'react-native';

import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		borderRadius: 7,
	},
	text: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
	},
});
