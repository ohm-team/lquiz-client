import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    backgroundColor: "#625772",
    position: "relative",
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
    height: "100%",
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
});
