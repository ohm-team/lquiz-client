import { QuestionWithAnswers } from "../types";

const transformQuestion = (
  q: {
    question: {
      what: string;
      value: number;
      correctAnswerIndex: number;
    };
    answers: string[];
  },
  i: number
): QuestionWithAnswers => {
  return {
    question: {
      what: q.question.what,
      value: q.question.value,
      imgSrc: `https://source.unsplash.com/random?quiz&version=${i}`,
      correctAnswerId: q.question.correctAnswerIndex.toString(),
    },
    id: i.toString(),
    answers: q.answers.map((a, id) => ({
      what: a,
      id: id.toString(),
    })),
  };
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const MOCK: QuestionWithAnswers[] = require("./questions.json").questions.map(
  transformQuestion
);
export const QUESTIONS_COUNT = 3;

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
  return {
    correctAnswerId: MOCK[parseInt(questionId)].question.correctAnswerId,
  };
};
