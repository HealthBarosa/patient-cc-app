/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export default StyleSheet.create({
  container: {
    
  },
  label: {
    fontFamily: AppStyles.fontPoppinsRegular,
    fontSize: 13,
  },
  focusedLabel: {
    color: AppStyles.colorBrand1,
  },
  blurredLabel: {
    color: AppStyles.colorGrey2,

  },
});

