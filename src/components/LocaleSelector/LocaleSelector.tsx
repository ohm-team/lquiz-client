import React from "react";
import { locales, Locale } from "src/config/locales";
import { useSettings } from "src/contexts/SettingsContext";
import { Button, Menu } from "react-native-paper";
import { StyleProp, ViewStyle } from "react-native";
import { T } from "react-targem";

const LocalSelector: React.FC<LocalSelectorProps> = ({
  buttonStyle,
}: LocalSelectorProps) => {
  const { setSettings, locale } = useSettings();
  const handleLocaleChange = (localeKey: Locale) => () => {
    setSettings({
      locale: localeKey,
    });
    closeMenu();
  };

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button style={buttonStyle} mode="outlined" onPress={openMenu}>
          <T message="Choose language" />
        </Button>
      }
    >
      {locales.map((l) => (
        <Menu.Item
          key={l.key}
          onPress={handleLocaleChange(l.key)}
          title={
            <>
              {l.localName} ({l.internationalName})
            </>
          }
        />
      ))}
    </Menu>
  );
};

interface LocalSelectorProps {
  buttonStyle: StyleProp<ViewStyle>;
}

export default LocalSelector;
