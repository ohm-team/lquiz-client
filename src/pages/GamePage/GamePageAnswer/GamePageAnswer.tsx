import React from "react";
import { Text } from "react-native";
import { Button, Colors } from "react-native-paper";
import styles from "./GamePageAnswer.styles";

const successTheme = {
  colors: {
    primary: Colors.green300,
  },
};

const warningTheme = {
  colors: {
    primary: Colors.red300,
  },
};

const GamePageAnswer: React.FC<GamePageAnswerProps> = ({
  onAnswerClick,
  id,
  answerStatistics,
  answerValue,
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
      {isLoading ? null : (
        <>
          <Text style={styles.value}>{answerValue}</Text>{" "}
          <Text style={styles.statistics}>{answerStatistics}</Text>
        </>
      )}
    </Button>
  );
};

interface GamePageAnswerProps {
  id: string;
  onAnswerClick: (answerId: string) => void;
  answerStatistics: string;
  answerValue: string;
  isLoading: boolean;
  isAnyQuestionLoading: boolean;
  isAnswerRevealed: boolean;
  isSelected: boolean;
  isCorrectAnswer: boolean;
}

export default GamePageAnswer;
