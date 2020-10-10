import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
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
  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState<QuestionWithAnswers | null>(null);
  const [correctAnswerId, setCorrectAnswerId] = useState<string | undefined>(
    undefined
  );
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    string | undefined
  >();
  const [isQuestionLoading, setIsQuestionLoading] = useState<boolean>(false);

  async function fetchData(questionNumber: number) {
    setIsQuestionLoading(true);
    const question = await fetchQuestionByIndex(questionNumber);
    setIsQuestionLoading(false);
    setCurrentQuestion(question);
  }

  async function checkAnswer() {
    const { correctAnswerId } = await checkQuestion(currentQuestion?.id);
    setCorrectAnswerId(correctAnswerId);
  }

  useEffect(() => {
    fetchData(currentQuestionNumber);
  }, [currentQuestionNumber]);

  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const handleAnswerClick = (id: string) => {
    setSelectedAnswerId(id);
    checkAnswer();
    //if (nextQuestionNumber === QUESTIONS_COUNT) {
    //  navigation.navigate("Home");
    //} else {
    //  setCurrentQuestion(null);
    //  setCurrentQuestionNumber(nextQuestionNumber);
    //}
  };

  const handleNextButtonClick = () => {
    const nextQuestionNumber = currentQuestionNumber + 1;
    if (nextQuestionNumber === QUESTIONS_COUNT) {
      navigation.navigate("Home");
      return;
    }
    setCurrentQuestion(null);
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

export default GamePageContainer;
