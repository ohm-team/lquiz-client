import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
  cardContent: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  cardImageContainer: {
    elevation: 8,
  },
  cardImage: {
    width: 200,
    height: 200,
  },
  cardTitle: {
    marginTop: 64,
    marginBottom: 64,
  },
  cardButton: {
    marginBottom: 32,
  },
});
