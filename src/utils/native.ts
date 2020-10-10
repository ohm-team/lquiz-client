import { Linking, Platform } from "react-native";

export const openLinkInNewTab = async (url: string) => {
  if (Platform.OS === "web") {
    window.open(url, "_blank");
  }
  await Linking.openURL(url);
};
