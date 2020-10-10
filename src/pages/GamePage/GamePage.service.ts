import { QuestionWithAnswers } from "../types";
import { MOCK } from "./GamePage.mock";

interface BackendQuestion {
  question: {
    whatStatistics: string;
    whatValue: string;
    value: number;
    correctAnswerIndex: number;
    url: string;
    answerUrl: string;
  };
  answers: { answerStatistics: string; answerValue: string }[];
}

export const transformQuestion = (
  q: BackendQuestion,
  i: number
): QuestionWithAnswers => {
  return {
    question: {
      whatStatistics: q.question.whatStatistics,
      whatValue: q.question.whatValue,
      value: q.question.value,
      imgSrc: `https://source.unsplash.com/random?quiz&version=${i}`,
      correctAnswerId: q.question.correctAnswerIndex.toString(),
      url: q.question.url,
      answerUrl: q.question.answerUrl,
    },
    id: i.toString(),
    answers: q.answers.map((a, id) => ({
      answerStatistics: a.answerStatistics,
      answerValue: a.answerValue,
      id: id.toString(),
    })),
  };
};

export const QUESTIONS_COUNT = 1;

let questionsCache: QuestionWithAnswers[];

export const fetchQuestionByIndex = async (
  index: number
): Promise<QuestionWithAnswers> => {
  return new Promise((resolve, reject) => {
    if (index > QUESTIONS_COUNT) {
      reject("No such question");
      return;
    }
    if (!questionsCache) {
      questionsCache = MOCK.map(transformQuestion);
    }
    setTimeout(() => {
      resolve(questionsCache[index]);
    }, 1500);
  });
};

// eslint-disable-next-line
export const checkQuestion = async (
  questionId: string
): Promise<{ correctAnswerId: string }> => {
  const question = questionsCache.find((q) => q.id === questionId);
  if (!question) {
    throw new Error("No such question");
  }
  return {
    correctAnswerId: question.question.correctAnswerId,
  };
};
