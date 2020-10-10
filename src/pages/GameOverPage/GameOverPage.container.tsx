/* eslint-disable react/prop-types */
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import GameOverPage from "./GameOverPage";
import { RootStackRoute, RootStackRoutes } from "../types";

const facebookShareURL = "https://ohm-team.github.io/lquiz-client/";

const GameOverPageContainer: React.FC<GameOverPageContainerProps> = ({
  navigation,
  route: { params },
}) => {
  const { gameResults, gamePace } = params;

  const pace =
    Math.round((gamePace.reduce((v, a) => v + a, 0) / gamePace.length) * 10) /
    10;
  const paceAvg = 20;
  const totalAnswered = gameResults.length;
  const correctAnswered = gameResults.filter(Boolean).length;
  const accuracy = Math.round((100 * correctAnswered) / totalAnswered) / 100;
  const paceStatus = Math.round((100 * pace) / paceAvg) / 100;
  const facebookShareMessage = `My Luxembourg knoweledge is ${correctAnswered}/${totalAnswered}. Try it out to test your skills!`;
  const goto = (routeName: RootStackRoute) => () => {
    navigation.navigate(routeName);
  };

  const props = {
    facebookShareMessage,
    facebookShareURL,
    accuracy,
    userStatus: "Game finished",
    paceStatus,
    pace,
    totalAnswered,
    correctAnswered,
    goto,
  };

  return <GameOverPage {...props} />;
};

export default GameOverPageContainer;

interface GameOverPageContainerProps {
  navigation: StackNavigationProp<RootStackRoutes, "GameOver">;
  route: RouteProp<RootStackRoutes, "GameOver">;
}
