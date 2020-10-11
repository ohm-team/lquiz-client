import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default StyleSheet.create({
  card: {
    minHeight: "100%",
    overflow: "visible",
    width: "100%",
    borderRadius: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    minHeight: "100%",
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
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 0,
  },
  sourceLinksContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,.7)",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  sourceLink: {
    color: Colors.black,
  },
  titleValue: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
