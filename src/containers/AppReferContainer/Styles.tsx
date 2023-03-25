/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';


export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  headerText: {
    fontFamily: AppStyles.fontPoppinsSemiBold,
    fontSize: 18,
    color: AppStyles.colorGrey2,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: '47%',
  },
});

