import React from "react";
import { TextInput, Card } from "react-native-paper";
import { T } from "react-targem";
import { useSettings } from "src/contexts/SettingsContext";
import styles from "./Settings.styles";

const Settings: React.FC<SettingsProps> = () => {
  const { nickName, setSettings } = useSettings();
  const onChangeText = (nickName: string) => setSettings({ nickName });
  return (
    <Card style={styles.container}>
      <Card.Title title={<T message="Settings" />} />
      <Card.Content>
        <TextInput
          mode="outlined"
          label="Name"
          value={nickName}
          onChangeText={onChangeText}
        />
      </Card.Content>
    </Card>
  );
};
interface SettingsProps {}

export default Settings;
