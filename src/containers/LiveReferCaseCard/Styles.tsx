import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#919191",
  },
  body: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 20,
  },
  image: {
    width: 55,
    borderRadius: 10,
  },
  textContainer: {

  },
  bodyText: {
    fontFamily: AppStyles.fontPoppinsRegular,
    color: AppStyles.colorGrey2,
    fontSize: 16,
  },
  subText: {
    color: "#A7A6A5",
    fontFamily: AppStyles.fontManropeRegular,
  },
  caseContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 12,
  },
  caseText: {
    fontFamily: AppStyles.fontPoppinsMedium,
    color: AppStyles.colorGrey2,
    fontSize: 14
  },
});

