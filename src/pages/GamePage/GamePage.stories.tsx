import React from "react";
import { Story } from "@storybook/react";
import GamePage from "./GamePage";

export default {
  title: "pages/GamePage",
  component: GamePage,
  args: {
    currentQuestionNumber: 3,
    totalQuestionsCount: 20,
    isQuestionLoading: false,
    question: {
      what: "Babies were born",
      where: "2019",
      count: 2042,
    },
    answers: [
      {
        what: "Suicides in Luxembourg county",
        where: "2013",
        id: "23",
      },
      {
        what: "Bottles of beers sold",
        where: "Aug, 2009",
        id: "85",
      },
      {
        what: "Students has been graduated from Luxmebourg philharmonie",
        where: "2019",
        id: "68",
      },
      {
        what: "Criminal cases closed",
        where: "2010",
        id: "71",
      },
    ],
  },
  argTypes: {
    onBackButtonClick: { action: "onBackButtonClick" },
    onAnswerClick: { action: "onAnswerClick" },
  },
};

const Template: Story<React.ComponentProps<typeof GamePage>> = (args) => (
  <GamePage {...args} />
);

export const Basic = Template.bind({});
export const WithLoading = Template.bind({});
WithLoading.args = {
  isQuestionLoading: true,
  question: null,
  answers: null,
};

export const WithQuestionLoading = Template.bind({});
WithQuestionLoading.args = {
  questionLoadingId: "71",
};

export const WithCorrectAnswer = Template.bind({});
WithCorrectAnswer.args = {
  correctAnswerId: "71",
};

export const WithIncorrectAnswer = Template.bind({});
WithIncorrectAnswer.args = {
  correctAnswerId: "68",
  incorrectAnswerId: "71",
};
