import React from "react";
import { Story } from "@storybook/react";
import GamePage from "./GamePage";

export default {
  title: "pages/GamePage",
  component: GamePage,
};

const Template: Story<React.ComponentProps<typeof GamePage>> = (args) => (
  <GamePage {...args} />
);

export const Basic = Template.bind({});
