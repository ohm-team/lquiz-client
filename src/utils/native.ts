import { Linking, Platform } from "react-native";

export const openLinkInNewTab = async (url: string) => {
  if (Platform.OS === "web") {
    return window.open(url, "_blank");
  }
  await Linking.openURL(url);
};
