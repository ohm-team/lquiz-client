import { QuestionWithAnswers } from "../types";

export const MOCK: QuestionWithAnswers[] = [
  {
    id: "q-1",
    question: {
      what: "{value} people died on road in 1991",
      value: 2042,
      imgSrc: `https://source.unsplash.com/random?quiz&version=1}`,
    },
    answers: [
      {
        what: "{value} people died on road in 1991",
        id: "1",
      },
      {
        what: "{value} Cyclists died on road in 2018",
        id: "2",
      },
      {
        what:
          "{value} people were injuried from Other types of accidents in 1991",
        id: "3",
      },
      {
        what: "{value} 4 wheel passengers died on road in 2019",
        id: "4",
      },
    ],
  },
  {
    id: "q-2",
    question: {
      what: "{value} people died on road in 1991",
      value: 22,
      imgSrc: "https://source.unsplash.com/random?quiz&version=2",
    },
    answers: [
      {
        what: "{value} people died on road in 1991",
        id: "1",
      },
      {
        what: "{value} Cyclists died on road in 2018",
        id: "2",
      },
      {
        what:
          "{value} people were injuried from Other types of accidents in 1991",
        id: "3",
      },
      {
        what: "{value} 4 wheel passengers died on road in 2019",
        id: "4",
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
