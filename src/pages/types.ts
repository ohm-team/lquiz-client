export type RootStackRoutes = {
  Home: undefined;
  Rules: undefined;
  Game: undefined;
  GameOver: {
    gameResults: boolean[];
  };
  Settings: undefined;
};

export type RootStackRoute = keyof RootStackRoutes;

export type Answer = {
  answerValue: string;
  answerStatistics: string;
  id: string;
};

export type Question = {
  whatStatistics: string;
  whatValue: string;
  imgSrc: string;
  value: number;
  url: string;
  answerUrl: string;
  correctAnswerId: string;
};

export type QuestionWithAnswers = {
  question: Question;
  answers: Answer[];
  id: string;
};
