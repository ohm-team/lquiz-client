export type RootStackRoutes = {
  Home: undefined;
  Rules: undefined;
  Game: undefined;
};

export type RootStackRoute = keyof RootStackRoutes;

export type Answer = {
  what: string;
  id: string;
};

export type Question = {
  what: string;
  imgSrc: string;
  value: number;
};

export type QuestionWithAnswers = {
  question: Question;
  answers: Answer[];
  id: string;
};
