import React from "react";
import { Story } from "@storybook/react";
import GameOverPage from "./GameOverPage";

export default {
  title: "pages/GameOverPage",
  component: GameOverPage,
  args: {
    facebookShareURL: "https://ohm-team.github.io/lquiz-client/",
    facebookShareMessage:
      "My Luxembourg knoweledge is 13/20. Try it out to test your skills!",
    userStatus: "Artificial intelligence",
    correctAnswered: 13,
    totalAnswered: 20,
    pace: 16.9,
    accuracy: 0.612,
  },
};

const Template: Story<React.ComponentProps<typeof GameOverPage>> = (args) => (
  <GameOverPage {...args} />
);

export const Basic = Template.bind({});
