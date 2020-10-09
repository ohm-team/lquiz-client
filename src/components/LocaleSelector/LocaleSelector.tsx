import React from "react";
import { locales, Locale } from "src/config/locales";
import { useSettings } from "src/contexts/SettingsContext";
import { Button, Menu } from "react-native-paper";

const LocalSelector: React.FC<LocalSelectorProps> = (
  props: LocalSelectorProps
) => {
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

  const currentLocale = locales.find((l) => l.key === locale);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button onPress={openMenu}>
          {currentLocale?.localName} ({currentLocale?.internationalName})
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

interface LocalSelectorProps {}

export default LocalSelector;
