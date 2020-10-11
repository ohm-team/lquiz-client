import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    minHeight: "100%",
  },
  card: {
    minHeight: "100%",
    width: "100%",
    padding: 20,
    borderRadius: 0,
  },
  content: {
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    lineHeight: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
});
