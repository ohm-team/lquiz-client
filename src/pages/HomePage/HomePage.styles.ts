import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    minHeight: "100%",
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    backgroundColor: "#625772",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  cardContent: {
    alignItems: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  cardImageContainer: {
    elevation: 8,
    height: "100%",
    position: "absolute",
  },
  buttonsContainer: {
    marginTop: 200,
    alignItems: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  cardImage: {
    width: 370,
    height: "100%",
  },
  cardTitle: {
    marginTop: 64,
    marginBottom: 64,
    color: "#fff",
  },
  cardButton: {
    marginBottom: 20,
  },
  themeToggler: {
    position: "absolute",
    top: "14%",
    left: 165,
  },
});
