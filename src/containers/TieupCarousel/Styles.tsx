/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import AppStyles from "@/AppStyles";


export default StyleSheet.create({
  container: {
    //width: '100%',
  },
  listContainer: {
    //width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headerText: {
    fontFamily: AppStyles.fontPoppinsSemiBold,
    fontSize: 18,
    color: AppStyles.colorGrey2,
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  seeText: {
    fontFamily: AppStyles.fontPoppinsMedium,
    fontSize: 12,
    color: AppStyles.colorGrey2,
  },
});

