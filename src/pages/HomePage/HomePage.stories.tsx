import React from "react";
import { Story } from "@storybook/react";
import HomePage from "./HomePage";

export default {
  title: "pages/HomePage",
  component: HomePage,
};

const Template: Story<React.ComponentProps<typeof HomePage>> = (args) => (
  <HomePage {...args} />
);

export const Basic = Template.bind({});
