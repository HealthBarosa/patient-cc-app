/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';


export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(46, 46, 46, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
  },
  text: {
    fontFamily: AppStyles.fontManropeBold,
    fontSize: 14,
    color: AppStyles.colorGrey2,
  },
});

