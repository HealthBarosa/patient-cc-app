import {StyleSheet} from 'react-native';

import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		borderRadius: 16,
	},
	text: {
		fontSize: 20,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
	},
});
