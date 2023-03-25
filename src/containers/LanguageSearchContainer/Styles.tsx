import {StyleSheet} from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		borderRadius: 14,
		backgroundColor: AppStyles.colorGreyLight3,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		width: '10%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '90%',
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 14,
		paddingHorizontal: 7,
	},
});
