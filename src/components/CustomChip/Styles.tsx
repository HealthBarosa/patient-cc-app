import {StyleSheet} from 'react-native';

import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
<<<<<<<< HEAD:src/components/CustomChip/Styles.tsx
		borderWidth: 1.5,
		gap: 4,
		borderRadius: 10,
========
		paddingVertical: 10,
		borderRadius: 16,
>>>>>>>> remotes/origin/dev:src/components/PrimaryButton/Styles.tsx
	},
	text: {
		fontSize: 15,
		fontFamily: AppStyles.fontPoppinsSemiBold,
		color: AppStyles.colorGrey2,
	},
});
