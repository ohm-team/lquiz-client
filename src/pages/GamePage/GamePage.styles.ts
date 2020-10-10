import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    minHeight: "100%",
    overflow: "visible",
    width: "100%",
    borderRadius: 0,
  },
  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 32,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    minWidth: "90%",
  },
  buttonContent: {
    minHeight: 55,
  },
  title: {
    marginTop: 16,
    marginBottom: 0,
  },
});
