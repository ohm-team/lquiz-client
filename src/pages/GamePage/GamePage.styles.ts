import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    height: "100%",
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
    minHeight: 65,
  },
  buttonContent: {
    paddingTop: 16,
    paddingBottom: 16,
    minHeight: 65,
  },
  buttonSuccess: {
    backgroundColor: "green",
  },
  title: {
    marginTop: 32,
    marginBottom: 8,
  },
});
