import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useSettings } from "../../contexts/SettingsContext";
import { QuestionWithAnswers, RootStackRoute, RootStackRoutes } from "../types";
import GamePage from "./GamePage";
import {
  checkQuestion,
  fetchQuestionByIndex,
  QUESTIONS_COUNT,
} from "./GamePage.service";

const GamePageContainer: React.FC<GamePageContainerProps> = ({
  navigation,
}: GamePageContainerProps) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionWithAnswers | undefined
  >(undefined);
  const [correctAnswerId, setCorrectAnswerId] = useState<string | undefined>(
    undefined
  );
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    string | undefined
  >();
  const [isQuestionLoading, setIsQuestionLoading] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats>();
  const { locale } = useSettings();

  async function fetchData(questionNumber: number) {
    setIsQuestionLoading(true);
    const question = await fetchQuestionByIndex(questionNumber, locale);
    setIsQuestionLoading(false);
    setCurrentQuestion(question);
  }

  async function checkAnswer(selectedAnswerId: string) {
    if (!currentQuestion) {
      throw new Error("There is no current question");
    }
    const { correctAnswerId } = await checkQuestion(currentQuestion.id);
    setCorrectAnswerId(correctAnswerId);
    setStats((stats) => {
      const ended = [...(stats?.ended || [])];
      const isCorrect = [...(stats?.isCorrect || [])];
      ended[currentQuestionNumber] = Date.now();
      isCorrect[currentQuestionNumber] = correctAnswerId === selectedAnswerId;
      return { ...(stats || {}), ended, isCorrect };
    });
  }

  useEffect(() => {
    setStats((stats) => {
      const started = [...(stats?.started || [])];
      started[currentQuestionNumber] = Date.now();
      return { ...(stats || {}), started };
    });
    fetchData(currentQuestionNumber);
  }, [currentQuestionNumber]);

  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const handleAnswerClick = (id: string) => {
    setSelectedAnswerId(id);
    checkAnswer(id);
  };

  const handleNextButtonClick = () => {
    const nextQuestionNumber = currentQuestionNumber + 1;
    if (nextQuestionNumber === QUESTIONS_COUNT) {
      if (!stats) throw new Error("no stats");
      if (!stats.started) throw new Error("no stats for started");
      if (!stats.ended) throw new Error("no stats for ended");
      if (!stats.isCorrect) throw new Error("no stats from isCorrect");
      const gamePace = stats.started.map((started, index) => {
        const ended = stats.ended![index];
        return Math.round((ended - started) / 100) / 10;
      });
      navigation.navigate("GameOver", {
        gameResults: stats.isCorrect,
        gamePace,
      });
      return;
    }
    setCorrectAnswerId(undefined);
    setSelectedAnswerId(undefined);
    setCurrentQuestion(undefined);
    setCurrentQuestionNumber(nextQuestionNumber);
  };

  return (
    <GamePage
      currentQuestionNumber={currentQuestionNumber + 1}
      isQuestionLoading={isQuestionLoading}
      question={currentQuestion?.question}
      answers={currentQuestion?.answers}
      totalQuestionsCount={QUESTIONS_COUNT}
      correctAnswerId={correctAnswerId}
      onBackButtonClick={handleLinkButtonClick("Home")}
      onAnswerClick={handleAnswerClick}
      selectedAnswerId={selectedAnswerId}
      isNextButtonVisible={Boolean(correctAnswerId)}
      onNextButtonClick={handleNextButtonClick}
    />
  );
};

interface GamePageContainerProps {
  navigation: StackNavigationProp<RootStackRoutes, "Game">;
}

interface Stats {
  started?: number[];
  ended?: number[];
  isCorrect?: boolean[];
}

export default GamePageContainer;
