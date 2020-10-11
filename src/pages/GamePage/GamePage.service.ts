import { QuestionWithAnswers } from "../types";

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

export const QUESTIONS_COUNT = 20;

let questionsCache: QuestionWithAnswers[];

const fetchAllQuizQuestions = async (
  questionsCount: number,
  locale: string
) => {
  const backendLocale = locale === "fr" ? "fr" : "en-US";
  const response = await fetch(
    `https://lquiz-backend.goooseman.ru/generate_questions?count=${questionsCount}&locale=${backendLocale}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const { questions } = await response.json();

  return Promise.resolve(questions.map(transformQuestion));
};

export const fetchQuestionByIndex = async (
  index: number,
  locale: string
): Promise<QuestionWithAnswers> => {
  questionsCache = await fetchAllQuizQuestions(QUESTIONS_COUNT, locale);
  return new Promise((resolve, reject) => {
    if (index > QUESTIONS_COUNT) {
      reject("No such question");
      return;
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
