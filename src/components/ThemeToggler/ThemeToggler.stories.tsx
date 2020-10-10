import { Story } from "@storybook/react";
import React from "react";
import ThemeToggler from "./ThemeToggler";

export default {
  title: "components/ThemeToggler",
  component: ThemeToggler,
};

const Template: Story<React.ComponentProps<typeof ThemeToggler>> = (args) => (
  <ThemeToggler {...args} />
);

export const Basic = Template.bind({});
