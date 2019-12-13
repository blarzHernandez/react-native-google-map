import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  container2: {
    flex: 1,
    justifyContent: "center"
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#575757",
    marginLeft: 20,
    marginTop: 10
  },
  mapView: {
    flex: 1,
    justifyContent: "center"
  },
  restaurantList: {
    flex: 1,
    justifyContent: "center"
  },
  chevron: {
    color: "#e90000"
  },
  rowDirection: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  startReviewsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
