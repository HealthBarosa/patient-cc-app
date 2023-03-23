import {StyleSheet} from 'react-native';
import AppStyles from '../../../AppStyles';

export default StyleSheet.create({
	buttonLayout: {
		borderColor: '#b7b7b7',
		borderWidth: 1,
		borderRadius: 16,
		paddingVertical: 14,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	buttonText: {
		color: AppStyles.colorDark1,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
