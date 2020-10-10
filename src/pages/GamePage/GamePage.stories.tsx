import React from "react";
import { Story } from "@storybook/react";
import GamePage from "./GamePage";
import { MOCK } from "./GamePage.service";

export default {
  title: "pages/GamePage",
  component: GamePage,
  args: {
    currentQuestionNumber: 3,
    totalQuestionsCount: 20,
    isQuestionLoading: false,
    question: MOCK[1].question,
    answers: MOCK[1].answers,
  },
  argTypes: {
    onBackButtonClick: { action: "onBackButtonClick" },
    onAnswerClick: { action: "onAnswerClick" },
    onNextButtonClick: { action: "onNextButtonClick" },
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
  selectedAnswerId: "71",
  isNextButtonVisible: true,
};

export const WithIncorrectAnswer = Template.bind({});
WithIncorrectAnswer.args = {
  correctAnswerId: "68",
  selectedAnswerId: "71",
  isNextButtonVisible: true,
};
