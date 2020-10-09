import React from "react";
import { Story } from "@storybook/react";
import RulesPage from "./RulesPage";

export default {
  title: "pages/RulesPage",
  component: RulesPage,
};

const Template: Story<React.ComponentProps<typeof RulesPage>> = (args) => (
  <RulesPage {...args} />
);

export const Basic = Template.bind({});
