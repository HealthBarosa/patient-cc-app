import {StyleSheet} from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 140,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	image: {
		width: '30%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 10,
	},
	contentWrapper: {
		width: '65%',
		height: '100%',
	},
	headerText: {
		fontFamily: AppStyles.fontManropeBold,
		fontSize: 14,
		color: AppStyles.colorGrey2,
	},
	tagContainer: {
		maxWidth: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: AppStyles.colorGrey1,
		marginVertical: 10,
	},
	tagText: {
		fontFamily: AppStyles.fontManropeBold,
		fontSize: 11,
		color: AppStyles.colorGrey2,
	},
	footer: {},
	reviewContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		marginVertical: 5,
	},
	reviewText: {
		fontFamily: AppStyles.fontPoppinsMedium,
		fontSize: 12,
		color: 'rgba(46, 46, 46, 0.7)',
	},
	locationContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginLeft: 3,
		gap: 5,
	},
});
