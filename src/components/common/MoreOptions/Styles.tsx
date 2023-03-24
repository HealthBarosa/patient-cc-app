import {StyleSheet} from 'react-native';
import AppStyles from '../../../AppStyles';

export default StyleSheet.create({
	container: {
		backgroundColor: AppStyles.colorGreyLight1,
		borderRadius: 16,
		borderColor: AppStyles.colorGreyLight2,
		borderWidth: 1,
		padding: 10,
	},
	optionText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		fontWeight: '500',
		color: AppStyles.colorGrey2,
		paddingLeft: 9,
	},
	optionTabsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	logoContainer: {
		backgroundColor: AppStyles.colorBrandLight1,
		padding: 6,
		borderRadius: 100,
	},
	optionFirstContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 16,
		fontFamily: AppStyles.fontPoppinsMedium,
		fontWeight: '500',
		color: AppStyles.colorWhite,
	},
});
