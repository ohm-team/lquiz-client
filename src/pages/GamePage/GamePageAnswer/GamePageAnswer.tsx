import React from "react";
import { T } from "react-targem";
import { Button } from "react-native-paper";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

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
  where,
  isLoading,
  contentStyle,
  style,
  isDisabled,
  isSelected,
  isCorrectAnswer,
}: GamePageAnswerProps) => {
  const handleAnswerClick = () => {
    onAnswerClick(id);
  };

  const getTheme = () => {
    if (isCorrectAnswer === true) {
      return successTheme;
    }

    if (!isSelected || isDisabled) {
      return undefined;
    }

    return warningTheme;
  };

  return (
    <Button
      onPress={handleAnswerClick}
      style={style}
      contentStyle={contentStyle}
      mode="contained"
      disabled={isDisabled}
      loading={isLoading}
      theme={getTheme()}
    >
      {isLoading ? null : (
        <>
          {what} <T message="in" /> {where}
        </>
      )}
    </Button>
  );
};

interface GamePageAnswerProps {
  id: string;
  onAnswerClick: (answerId: string) => void;
  what: string;
  where: string;
  isLoading: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  style: StyleProp<ViewStyle>;
  contentStyle: StyleProp<TextStyle>;
}

export default GamePageAnswer;
