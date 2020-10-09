import { QuestionWithAnswers } from "../types";

export const MOCK: QuestionWithAnswers[] = [
  {
    question: {
      what: "Babies were born",
      where: "2019",
      count: 2042,
    },
    answers: [
      {
        what: "Suicides in Luxembourg county",
        where: "2013",
        id: "1",
      },
      {
        what: "Bottles of beers sold",
        where: "Aug, 2009",
        id: "2",
      },
      {
        what: "Students has been graduated from Luxmebourg philharmonie",
        where: "2019",
        id: "3",
      },
      {
        what: "Criminal cases closed",
        where: "2010",
        id: "71",
      },
    ],
  },
  {
    question: {
      what: "Water level was",
      where: "1993",
      count: 22,
    },
    answers: [
      {
        what: "Biggest bird weight",
        where: "ever",
        id: "4",
      },
      {
        what: "Amount of pigs",
        where: "2001",
        id: "5",
      },
      {
        what: "Girls were born",
        where: "2003",
        id: "6",
      },
      {
        what: "COVID cases",
        where: "2019",
        id: "7",
      },
    ],
  },
];
export const QUESTIONS_COUNT = 20;

export const fetchQuestionByIndex = async (
  index: number
): Promise<QuestionWithAnswers> => {
  if (index > QUESTIONS_COUNT) {
    return Promise.reject("No such question");
  }
  return Promise.resolve(MOCK[index % MOCK.length]);
};

// eslint-disable-next-line
export const checkQuestion = async (
  questionId: string
): Promise<{ correctAnswerId: string; incorrectAnswerId: string }> => {
  return { correctAnswerId: "1" };
};
