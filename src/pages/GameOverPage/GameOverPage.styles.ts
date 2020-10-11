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
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    minWidth: "90%",
  },
  title: {
    marginTop: 32,
    marginBottom: 8,
  },
  progressBar: {
    height: 5,
    transform: [{ scaleX: 1 }, { scaleY: 4 }, { translateY: 3 }],
    opacity: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  feedback: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 50,
  },
  content: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
