import {StyleSheet} from 'react-native';

import AppStyles from '../../../AppStyles';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 14,
		borderRadius: 16,
	},
	text: {
		fontSize: 17,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorWhite,
	},
});
