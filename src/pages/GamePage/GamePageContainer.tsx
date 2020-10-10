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
  const [currentQuestionNumber] = useState<number>(0);
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

  async function fetchData(questionNumber: number) {
    const question = await fetchQuestionByIndex(questionNumber);
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
    // eslint-disable-next-line no-console
    console.log("Answer is clicked!", id);
    setSelectedAnswerId(id);
    //const nextQuestionNumber = currentQuestionNumber + 1;
    checkAnswer();
    //if (nextQuestionNumber === QUESTIONS_COUNT) {
    //  navigation.navigate("Home");
    //} else {
    //  setCurrentQuestion(null);
    //  setCurrentQuestionNumber(nextQuestionNumber);
    //}
  };

  return currentQuestion ? (
    <GamePage
      currentQuestionNumber={currentQuestionNumber + 1}
      isQuestionLoading={true}
      question={currentQuestion.question}
      answers={currentQuestion.answers}
      totalQuestionsCount={QUESTIONS_COUNT}
      correctAnswerId={correctAnswerId}
      onBackButtonClick={handleLinkButtonClick("Home")}
      onAnswerClick={handleAnswerClick}
      selectedAnswerId={selectedAnswerId}
      isNextButtonVisible={Boolean(correctAnswerId)}
    />
  ) : (
    <></>
  );
};

interface GamePageContainerProps {
  navigation: StackNavigationProp<RootStackRoutes, "Game">;
}

export default GamePageContainer;
