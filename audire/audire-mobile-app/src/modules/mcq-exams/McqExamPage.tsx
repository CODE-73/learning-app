import {
  Box,
  ChevronLeftIcon,
  ChevronRightIcon,
  Text,
  HStack,
  Switch,
} from '@gluestack-ui/themed';
import { type McqQuestion } from '@learning-app/syllabus';
import React, { ComponentProps, FC, useEffect, useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import McqQuestionListIcon from '/assets/mcqQuestionListIcon.svg';
import QuiteIcon from '/assets/quiteIcon.svg';
import AllQuestions from './AllQuestions';
import Congratulations from './Congratulations';
import ConfirmSubmitDialog from './ConfirmSubmitDialog';
import { useMachine, useSelector } from '@xstate/react';
import { MCQMachine } from 'src/machines/MCQ/machine';

type McqExamPageProps = ComponentProps<typeof Box> & {
  questions: McqQuestion[];
};

const IconStyles = StyleSheet.create({
  ListIcon: {
    width: 18,
    height: 18,
  },
  quiteIcon: {
    width: 14,
    height: 13,
  },
});

const McqExamPage: FC<McqExamPageProps> = ({ questions }) => {
  const [showQuestionsDialog, setShowQuestionsDialog] = useState(false);
  const [showConfirmSubmitDialog, setShowConfirmSubmitDialog] = useState(false);
  const [showCongratsDialog, setShowCongratsDialog] = useState(false);
  const [state, send, actorRef] = useMachine(MCQMachine);

  const currentQuestionIdx = useSelector(actorRef, (state) =>
    state.context?.currentQuestionIdx >= 0
      ? state.context?.currentQuestionIdx
      : -1
  );
  const currentQuestion = useSelector(actorRef, (state) =>
    state.context?.currentQuestionIdx >= 0
      ? (state.context.questions ?? [])[state.context.currentQuestionIdx]
      : null
  );

  const markedToRevisit = useSelector(actorRef, (state) =>
    state.context?.currentQuestionIdx >= 0
      ? (state.context.markToRevisit ?? {})[
          state.context.currentQuestionIdx
        ] === true
      : false
  );

  const markAnswer = useSelector(
    actorRef,
    (state) => state.context?.markAnswer ?? {}
  );

  useEffect(
    () =>
      send({
        type: 'START_EXAM',
        questions,
      }),
    [send, questions]
  );

  const options = useMemo(
    () =>
      (currentQuestion?.options ?? []).map((op, idx) => ({
        id: idx,
        option: op,
      })),
    [currentQuestion]
  );

  return (
    <Box w="$full">
      <Box display="flex" flexDirection="row" justifyContent="flex-end" pr="$4">
        <Box>
          <TouchableOpacity onPress={() => setShowQuestionsDialog(true)}>
            <Box pt="$1.5">
              <McqQuestionListIcon style={IconStyles.ListIcon} />
            </Box>
          </TouchableOpacity>
          {showQuestionsDialog && (
            <AllQuestions
              isOpen={showQuestionsDialog}
              currentQuestionIdx={state.context.currentQuestionIdx}
              onClose={() => setShowQuestionsDialog(false)}
              questions={state.context.questions}
              onJumpToQuestion={(idx) =>
                send({
                  type: 'JUMP_TO_QUESTION',
                  questionIdx: idx,
                })
              }
              markedToRevisit={state.context.markToRevisit}
              markAnswer={state.context.markAnswer}
              visited={state.context.visited}
            />
          )}
        </Box>
        <TouchableOpacity onPress={() => setShowConfirmSubmitDialog(true)}>
          <Box
            display="flex"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
            bgColor="#e5e5e5"
            ml="$4"
            p="$1"
            px="$3"
            borderRadius="$full"
          >
            <Text color="#8D0C8A" mr="$2">
              Quit
            </Text>
            <QuiteIcon style={IconStyles.quiteIcon} />
          </Box>
        </TouchableOpacity>

        <ConfirmSubmitDialog
          isOpen={showConfirmSubmitDialog}
          onConfirm={() => {
            send({
              type: 'SUBMIT_EXAM',
            });
            setShowCongratsDialog(true);
          }}
          onClose={() => setShowConfirmSubmitDialog(false)}
          numUnattended={state.context.numUnattended}
          numToRevisit={state.context.noOfQuestionToRevisit}
        />
      </Box>
      {/* start */}
      <Box>
        <Box>
          <Box
            borderRadius="$sm"
            mt="$16"
            mb="$2"
            backgroundColor="#e5e5e5"
            mx={17}
            pl="$4"
          >
            <Box pb="$16">
              <Text fontWeight="$semibold" fontSize={10} pt="$1.5">
                Question {(state.context?.currentQuestionIdx ?? 0) + 1}/
                {questions.length}
              </Text>
              <Text fontWeight="$bold">{currentQuestion?.question}</Text>
            </Box>
          </Box>
        </Box>
        <Box py="$5" px="$5">
          <HStack space="md">
            <Switch
              value={markedToRevisit}
              sx={{
                _light: {
                  props: {
                    trackColor: {
                      false: '$backgroundDark700',
                      true: '#8D0C8A',
                    },
                  },
                },
              }}
              onToggle={(arg) =>
                send({
                  type: 'MARK_TO_REVISIT',
                  markToRevisit: !markedToRevisit,
                })
              }
            />
            <Text size="sm">Mark to Revisit</Text>
          </HStack>
        </Box>

        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() =>
              send({
                type: 'MARK_ANSWER',
                selectedOption:
                  markAnswer[currentQuestionIdx] === option.id ? -1 : option.id,
              })
            } //MarkAnswer
          >
            <Box
              display="flex"
              flexDirection="row"
              borderRadius="$sm"
              overflow="hidden"
              backgroundColor={
                markAnswer[currentQuestionIdx] === option.id
                  ? '#94B6BB'
                  : '#e5e5e5'
              }
              mx={17}
              p="$2"
              mb="$2"
              alignItems="center"
            >
              <Box
                bg="#F9E2F9"
                p="$2"
                width="$10"
                alignItems="center"
                borderRadius="$lg"
              >
                <Text color="black" fontWeight="$bold">
                  {option.id}
                </Text>
              </Box>
              <Box flexShrink={1}>
                <Text fontWeight="$bold" pl="$10" numberOfLines={2} isTruncated>
                  {option.option}
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        ))}

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          pt="$16"
        >
          <TouchableOpacity
            onPress={() =>
              send({
                type: 'PREV_QUESTION',
              })
            }
            disabled={!state.can({ type: 'PREV_QUESTION' })}
          >
            <Box
              bg={state.can({ type: 'PREV_QUESTION' }) ? '#e5e5e5' : '#F6F6F6'}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={150}
              p="$2"
              borderRadius="$lg"
            >
              <ChevronLeftIcon />
              <Text color="black">Previous</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              send({
                type: 'NEXT_QUESTION',
              })
            }
            disabled={!state.can({ type: 'NEXT_QUESTION' })}
          >
            <Box
              bg={state.can({ type: 'NEXT_QUESTION' }) ? '#e5e5e5' : '#F6F6F6'}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={150}
              p="$2"
              borderRadius="$lg"
            >
              <Text color="black">Next</Text>
              <ChevronRightIcon />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <TouchableOpacity onPress={() => setShowConfirmSubmitDialog(true)}>
        <Box m="$6" bg="#8D0C8A" p="$2" alignItems="center">
          <Text fontSize="$md" fontWeight="bold" color="white">
            Submit
          </Text>
        </Box>
      </TouchableOpacity>
      <Congratulations
        isOpen={showCongratsDialog}
        onClose={() => setShowCongratsDialog(false)}
        markObtained={state.context.markObtained}
        maxMark={state.context.maxMark}
        numQuestions={state.context.questions?.length}
      />
    </Box>
  );
};
export default McqExamPage;
