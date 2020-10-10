export type RootStackRoutes = {
  Home: undefined;
  Rules: undefined;
  Game: undefined;
  Settings: undefined;
};

export type RootStackRoute = keyof RootStackRoutes;

export type Answer = {
  what: string;
  where: string;
  id: string;
};

export type Question = {
  what: string;
  where: string;
  count: string | number;
};

export type QuestionWithAnswers = {
  question: Question;
  answers: Answer[];
  id: string;
};
