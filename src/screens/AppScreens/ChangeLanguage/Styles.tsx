/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

import AppStyles from '../../../AppStyles';


export default StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    // paddingBottom: 100,
    backgroundColor: AppStyles.colorWhite,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  footer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: AppStyles.colorWhite,
  },
  footerButton: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(46, 46, 46, 0.3)',
  },
  footerButtonText: {
    fontFamily: AppStyles.fontManropeBold,
    fontSize: 16,
  },
});

