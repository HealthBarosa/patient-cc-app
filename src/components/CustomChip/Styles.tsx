import {StyleSheet} from 'react-native';

import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1.5,
		gap: 4,
		borderRadius: 10,
	},
	text: {
		fontSize: 15,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
});
