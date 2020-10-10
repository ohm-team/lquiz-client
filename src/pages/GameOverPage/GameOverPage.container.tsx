/* eslint-disable react/prop-types */
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useSettings } from "src/contexts/SettingsContext";
import GameOverPage from "./GameOverPage";
import { RootStackRoutes } from "../types";

const facebookShareURL = "https://ohm-team.github.io/lquiz-client/";

const GameOverPageContainer: React.FC<GameOverPageContainerProps> = ({
  route: { params },
}) => {
  const { gameResults } = params;

  const { nickName: userName } = useSettings();
  const facebookShareMessage = `${userName} passeed the quiz with great result`;
  const userStatus = "Artificial intelligence";
  const rangCurrent = 1;
  const rangTotal = 10;
  const coins = 3210;
  const pace = 16.9;
  const paceAvg = 20;
  const streaks = 2;
  const streaksMax = 3;
  const props = {
    gameResults,
    facebookShareMessage,
    facebookShareURL,
    userName,
    userStatus,
    rangCurrent,
    rangTotal,
    coins,
    pace,
    paceAvg,
    streaks,
    streaksMax,
  };

  return <GameOverPage {...props} />;
};

export default GameOverPageContainer;

interface GameOverPageContainerProps {
  navigation: StackNavigationProp<RootStackRoutes, "GameOver">;
  route: RouteProp<RootStackRoutes, "GameOver">;
}
