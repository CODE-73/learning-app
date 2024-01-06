import {
  Box,
  Button,
  ButtonText,
  ChevronLeftIcon,
  ChevronRightIcon,
  Text,
} from '@gluestack-ui/themed';
import { type McqQuestion } from '@learning-app/syllabus';
import React, { ComponentProps, FC, useEffect, useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import McqQuestionListIcon from '/assets/mcqQuestionListIcon.svg';
import QuiteIcon from '/assets/quiteIcon.svg';
import AllQuestions from './AllQuestions';
import Congratulations from './Congratulations';
import SubmitDialog from './SubmitDialog';
import { useMachine, useSelector } from '@xstate/react';
import { MCQMachine } from 'src/machines/MCQ/machine';
// import {
//   setMarkAnswer,
//   setCurrentQuestion,
//   setMarkToRevisit,
//   setNextQuestion,
//   setPrevQuestion,
//   setStartExam,
//   setSubmitExam,
// } from 'src/machines/MCQ/actions';

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
  const [showModal, setShowModal] = useState(false);
  const [showSubimtModal, setShowSubimtModal] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
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

  // const handleOptionClick = (optionId: string) => {
  //   setSelectedOption(optionId);
  // };

  return (
    <Box w="$full">
      <Box display="flex" flexDirection="row" justifyContent="flex-end" pr="$4">
        <Box>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Box pt="$1.5">
              <McqQuestionListIcon style={IconStyles.ListIcon} />
            </Box>
          </TouchableOpacity>
          {showModal && (
            <AllQuestions
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </Box>
        <TouchableOpacity onPress={() => setShowSubmitDialog(true)}>
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

        <SubmitDialog
          isOpen={showSubmitDialog}
          onClose={() => setShowSubmitDialog(false)}
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

        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() =>
              send({
                type: 'MARK_ANSWER',
                selectedOption: option.id,
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
          >
            <Box
              bg="#e5e5e5"
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
          >
            <Box
              bg="#e5e5e5"
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
      <TouchableOpacity
        onPress={() =>
          send({
            type: 'SUBMIT_EXAM',
          })
        }
      >
        <Box m="$6">
          <Button variant="solid" mt="$1" bg="#8D0C8A">
            <ButtonText fontSize="$md" fontWeight="bold">
              Submit
            </ButtonText>
          </Button>
        </Box>
      </TouchableOpacity>
      <Congratulations
        isOpen={showSubimtModal}
        onClose={() => setShowSubimtModal(false)}
      />
    </Box>
  );
};
export default McqExamPage;
