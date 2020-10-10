import React from "react";
import { Story } from "@storybook/react";
import GamePage from "./GamePage";
import { MOCK } from "./GamePage.mock";
import { transformQuestion } from "./GamePage.service";

const transformedQuestion = transformQuestion(MOCK[0], 0);

export default {
  title: "pages/GamePage",
  component: GamePage,
  args: {
    currentQuestionNumber: 3,
    totalQuestionsCount: 20,
    isQuestionLoading: false,
    question: transformedQuestion.question,
    answers: transformedQuestion.answers,
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
  questionLoadingId: "1",
};

export const WithCorrectAnswer = Template.bind({});
WithCorrectAnswer.args = {
  correctAnswerId: "1",
  selectedAnswerId: "1",
  isNextButtonVisible: true,
};

export const WithIncorrectAnswer = Template.bind({});
WithIncorrectAnswer.args = {
  correctAnswerId: "2",
  selectedAnswerId: "1",
  isNextButtonVisible: true,
};
