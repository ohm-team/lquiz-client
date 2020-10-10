import React from "react";
import { TextInput, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { T } from "react-targem";
import { useSettings } from "src/contexts/SettingsContext";
import styles from "./Settings.styles";

const Settings: React.FC<SettingsProps> = () => {
  const { nickName, setSettings } = useSettings();
  const onChangeText = (nickName: string) => {
    setSettings({ nickName });
  };
  return (
    <Card style={styles.container}>
      <SafeAreaView>
        <Card.Title title={<T message="Settings" />} />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Name"
            defaultValue={nickName}
            onChangeText={onChangeText}
          />
        </Card.Content>
      </SafeAreaView>
    </Card>
  );
};
interface SettingsProps {}

export default Settings;
