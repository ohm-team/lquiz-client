import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackRoutes, RootStackRoute } from "../types";
import GamePage from "./GamePage";

const GamePageContainer: React.FC<GamePageContainerProps> = ({
  navigation,
}: GamePageContainerProps) => {
  const handleLinkButtonClick = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const handleAnswerClick = () => {
    // eslint-disable-next-line no-console
    console.log("Answer is clicked!");
  };

  const currentQuestionNumber = 1;
  const totalQuestionsCount = 20;

  return (
    <GamePage
      currentQuestionNumber={currentQuestionNumber}
      isQuestionLoading={true}
      totalQuestionsCount={totalQuestionsCount}
      onBackButtonClick={handleLinkButtonClick("Home")}
      onAnswerClick={handleAnswerClick}
    />
  );
};

interface GamePageContainerProps {
  navigation: StackNavigationProp<RootStackRoutes, "Game">;
}

export default GamePageContainer;
