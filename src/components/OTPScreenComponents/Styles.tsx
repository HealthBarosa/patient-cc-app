import {StyleSheet} from 'react-native';
import AppStyles from '@/AppStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		gap: 16,
		marginTop: 52,
		justifyContent: 'center',
	},

	inputFields: {
		width: 60,
		height: 60,
		borderRadius: 16,
		borderWidth: 1,
		backgroundColor: AppStyles.colorGreyLight1,
		paddingHorizontal: 18,
		fontSize: 32,
		fontFamily: AppStyles.fontManropeSemiBold,
		color: AppStyles.colorDark2,
		borderColor: AppStyles.colorDark1,
		textAlign: 'center',
	},
});
