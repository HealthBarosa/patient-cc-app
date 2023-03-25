import {StyleSheet} from 'react-native';

import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.17)',
	},
	label: {
		fontFamily: AppStyles.fontManropeSemiBold,
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.34)',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		paddingRight: 10,
		fontFamily: AppStyles.fontManropeBold,
		fontSize: 16,
		color: AppStyles.colorGrey2,
	},
	btn: {
		width: '15%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		fontFamily: AppStyles.fontManropeSemiBold,
		fontSize: 14,
		color: AppStyles.colorBrand1,
	},
});
