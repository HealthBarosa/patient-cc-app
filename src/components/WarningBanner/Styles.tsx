import AppStyles from "@/AppStyles";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#FDE047",
    backgroundColor: "#FEFCE8",
    borderRadius: 20,
  },
  warningText: {
    fontFamily: AppStyles.fontManropeSemiBold,
    fontSize: 15,
    color: "#854D0E",
  },
  warningBodyText: {
    fontFamily: AppStyles.fontManropeRegular,
    fontSize: 15,
    color: "#A16207",
    marginTop: 5,
  },
});

