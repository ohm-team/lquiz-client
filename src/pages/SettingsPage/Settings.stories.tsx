import React from "react";
import { Story } from "@storybook/react";
import Settings from "./Settings";

export default {
  title: "pages/Settings",
  component: Settings,
};

const Template: Story<React.ComponentProps<typeof Settings>> = (args) => (
  <Settings {...args} />
);

export const Basic = Template.bind({});
