import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(46, 46, 46, 0.5)',
    backgroundColor: AppStyles.colorGreyLight1,
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  input: {
    width: '85%',
    height: '100%',
    fontFamily: AppStyles.fontPoppinsMedium,
    textAlignVertical: 'center',
    textTransform: "capitalize",
  },
  applyButton: {
    //width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  applyButtonText: {
    fontFamily: AppStyles.fontPoppinsRegular,
    color: 'rgba(251, 131, 31, 0.5)'
  },
});

