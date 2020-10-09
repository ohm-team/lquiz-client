import React from "react";
import { Story } from "@storybook/react";
import GameOverPage from "./GameOverPage";

export default {
  title: "pages/GameOverPage",
  component: GameOverPage,
};

const Template: Story<React.ComponentProps<typeof GameOverPage>> = (args) => (
  <GameOverPage {...args} />
);

export const Basic = Template.bind({});
