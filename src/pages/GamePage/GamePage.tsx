import React from "react";
import { Linking, ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Paragraph,
  ProgressBar,
  Text,
  Title,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { T } from "react-targem";
import { Answer, Question } from "../types";
import styles from "./GamePage.styles";
import GamePageAnswer from "./GamePageAnswer";

const LeftContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
  <Avatar.Text {...props} label="Q"/>
);

interface CardTitleAddon {
  size: number;
}

const GamePage: React.FC<GamePageProps> = ({
                                             totalQuestionsCount,
                                             currentQuestionNumber,
                                             question,
                                             answers,
                                             isQuestionLoading,
                                             onBackButtonClick,
                                             onAnswerClick,
                                             questionLoadingId,
                                             correctAnswerId,
                                             selectedAnswerId,
                                             isNextButtonVisible,
                                             onNextButtonClick,
                                           }: GamePageProps) => {
  const RightContent: React.FC<CardTitleAddon> = (props: CardTitleAddon) => (
    <Button onPress={onBackButtonClick}>
      <T message="Back"/>
    </Button>
  );

  const [whatStart, whatEnd] = (question?.whatValue || "").split("{value}");

  return (
    <ScrollView>
      <Card style={styles.card}>
        <SafeAreaView>
          <Card.Title
            title={
              <>
                <T message={"Quiz question"}/>
              </>
            }
            subtitle={
              <>
                {currentQuestionNumber} <T message="out of"/>{" "}
                {totalQuestionsCount}
              </>
            }
            left={LeftContent}
            right={RightContent}
          />

          {isQuestionLoading ? <ProgressBar indeterminate/> : null}
          {question ? (
            <>
              <View style={styles.coverContainer}>
                <Card.Cover
                  accessible={false}
                  source={{
                    uri: question.imgSrc,
                  }}
                />

                {isNextButtonVisible ? (
                  <View style={styles.coverButtonContainer}>
                    <Button
                      style={styles.nextQuestionButton}
                      mode="contained"
                      onPress={onNextButtonClick}
                    >
                      <T message="Next question!"/>
                    </Button>
                    <View style={styles.sourceLinksContainer}>
                      <Button>
                        <Text accessibilityRole='link' target='_blank' href={"https://" + question?.url}>
                          <T message="Question source"/>
                        </Text>
                      </Button>
                      <Button>
                        <Text accessibilityRole='link' target='_blank' href={"https://" + question?.answerUrl}>
                          <T message="Answer source"/>
                        </Text>
                      </Button>
                    </View>
                  </View>
                ) : null}
              </View>
              <Card.Content>
                <Title style={styles.titleStatistics}>
                  {question.whatStatistics}
                </Title>
                <Title style={styles.title}>
                  {whatStart}
                  <Text style={styles.titleValue}>{question.value}</Text>
                  {whatEnd}.{" "}
                  <T message="What else do you think my contain number"/>{" "}
                  <Text style={styles.titleValue}>
                    {question.value.toString()}
                  </Text>
                  ?
                </Title>
              </Card.Content>
            </>
          ) : null}
          {answers ? (
            <Card.Actions style={styles.buttonsContainer}>
              {answers.map((a) => (
                <GamePageAnswer
                  key={a.id}
                  answerValue={a.answerValue}
                  answerStatistics={a.answerStatistics}
                  onAnswerClick={onAnswerClick}
                  isLoading={questionLoadingId === a.id}
                  isAnyQuestionLoading={questionLoadingId !== undefined}
                  isSelected={selectedAnswerId === a.id}
                  isCorrectAnswer={a.id === correctAnswerId}
                  isAnswerRevealed={isNextButtonVisible}
                  {...a}
                />
              ))}
            </Card.Actions>
          ) : null}
        </SafeAreaView>
      </Card>
    </ScrollView>
  );
};

interface GamePageProps {
  currentQuestionNumber: number;
  totalQuestionsCount: number;
  isQuestionLoading: boolean;
  questionLoadingId?: string;
  correctAnswerId?: string;
  selectedAnswerId?: string;
  isNextButtonVisible: boolean;
  question?: Question | null;
  answers?: Answer[] | null;
  onBackButtonClick: () => void;
  onAnswerClick: (answerId: string) => void;
  onNextButtonClick: () => void;
}

export default GamePage;
