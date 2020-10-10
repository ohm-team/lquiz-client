import React from "react";
import { Button } from "react-native-paper";
import styles from "./GamePageAnswer.styles";

const successTheme = {
  colors: {
    primary: "#8BC34A",
  },
};

const warningTheme = {
  colors: {
    primary: "#FF5722",
  },
};

const GamePageAnswer: React.FC<GamePageAnswerProps> = ({
  onAnswerClick,
  id,
  what,
  isLoading,
  isAnyQuestionLoading,
  isSelected,
  isCorrectAnswer,
  isAnswerRevealed,
}: GamePageAnswerProps) => {
  const handleAnswerClick = () => {
    onAnswerClick(id);
  };

  const getTheme = () => {
    if (isCorrectAnswer === true) {
      return successTheme;
    }

    if (!isSelected || isAnyQuestionLoading) {
      return undefined;
    }

    return warningTheme;
  };

  return (
    <Button
      onPress={!isAnswerRevealed ? handleAnswerClick : undefined}
      style={styles.button}
      contentStyle={styles.buttonContent}
      mode="contained"
      disabled={
        isAnyQuestionLoading ||
        (isAnswerRevealed && !isSelected && !isCorrectAnswer)
      }
      loading={isLoading}
      theme={getTheme()}
    >
      {isLoading ? null : <>{what.replace("{value}", "")}</>}
    </Button>
  );
};

interface GamePageAnswerProps {
  id: string;
  onAnswerClick: (answerId: string) => void;
  what: string;
  isLoading: boolean;
  isAnyQuestionLoading: boolean;
  isAnswerRevealed: boolean;
  isSelected: boolean;
  isCorrectAnswer: boolean;
}

export default GamePageAnswer;
