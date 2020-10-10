import { QuestionWithAnswers } from "../types";

export const MOCK: QuestionWithAnswers[] = [
  {
    id: "q-1",
    question: {
      what: "Babies were born",
      where: "2019",
      count: 2042,
      imgSrc: `https://source.unsplash.com/random?quiz&version=1}`,
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
        id: "4",
      },
    ],
  },
  {
    id: "q-2",
    question: {
      what: "Water level was",
      where: "1993",
      count: 22,
      imgSrc: "https://source.unsplash.com/random?quiz&version=2",
    },
    answers: [
      {
        what: "Biggest bird weight",
        where: "ever",
        id: "5",
      },
      {
        what: "Amount of pigs",
        where: "2001",
        id: "6",
      },
      {
        what: "Girls were born",
        where: "2003",
        id: "7",
      },
      {
        what: "COVID cases",
        where: "2019",
        id: "8",
      },
    ],
  },
];
export const QUESTIONS_COUNT = 20;

export const fetchQuestionByIndex = async (
  index: number
): Promise<QuestionWithAnswers> => {
  return new Promise((resolve, reject) => {
    if (index > QUESTIONS_COUNT) {
      reject("No such question");
      return;
    }
    setTimeout(() => {
      resolve(MOCK[index % MOCK.length]);
    }, 1500);
  });
};

// eslint-disable-next-line
export const checkQuestion = async (
  questionId: string
): Promise<{ correctAnswerId: string }> => {
  return { correctAnswerId: questionId === "q-1" ? "1" : "5" };
};
