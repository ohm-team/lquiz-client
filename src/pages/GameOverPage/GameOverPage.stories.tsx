import React from "react";
import { Story } from "@storybook/react";
import GameOverPage from "./GameOverPage";

export default {
  title: "pages/GameOverPage",
  component: GameOverPage,
  args: {
    facebookShareMessage:
      "Hello Guys, This is a testing of facebook share example",
    userName: "Dexter Stoltenberg",
    userStatus: "Artificial intelligence",
    correctAnswered: 6,
    totalAnswered: 15,
    rangCurrent: 1,
    rangTotal: 10,
    coins: 3210,
    pace: 16.9,
    streaks: 2,
  },
};

const Template: Story<React.ComponentProps<typeof GameOverPage>> = (args) => (
  <GameOverPage {...args} />
);

export const Basic = Template.bind({});
