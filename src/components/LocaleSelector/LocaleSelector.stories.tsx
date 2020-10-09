import React from "react";
import { Story } from "@storybook/react";
import LocaleSelector from "./LocaleSelector";

export default {
  title: "components/LocaleSelector",
  component: LocaleSelector,
};

const Template: Story<React.ComponentProps<typeof LocaleSelector>> = (args) => (
  <LocaleSelector {...args} />
);

export const Basic = Template.bind({});
