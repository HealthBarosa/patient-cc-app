/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";


export default StyleSheet.create({
  container: {
    width: '100%',
  },
  banner: {
    position: 'relative',
    width: '100%',
  },
  bannerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
  },
  bannerTextContainer: {

  },
  bannerText: {
    fontFamily: AppStyles.fontPoppinsSemiBold,
    fontSize: 18,
    color: AppStyles.colorGrey2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    backgroundColor: AppStyles.colorBrand2,
  },
  buttonText: {
    fontFamily: AppStyles.fontPoppinsRegular,
    fontSize: 10,
    color: AppStyles.colorWhite,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  imageContainer: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(46, 46, 46, 0.5)',
    borderRadius: 999,
    padding: 1,
  },
  image: {
    width: 30,
    aspectRatio: 1,
    backgroundColor: 'rgba(46, 46, 46, 0.5)',
    borderRadius: 999,
  },
});

