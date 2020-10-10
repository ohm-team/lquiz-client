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
  coverContainer: {
    position: "relative",
  },
  coverButtonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  nextQuestionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    marginTop: 5,
    textAlign: "center",
    marginBottom: 0,
  },
  titleStatistics: {
    marginTop: 16,
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 0,
  },
  sourceLinksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleValue: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
