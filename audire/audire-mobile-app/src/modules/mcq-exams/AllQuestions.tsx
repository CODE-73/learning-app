import React, { ComponentProps, FC } from 'react';
import { CloseIcon } from '@gluestack-ui/themed';
import {
  Heading,
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { McqQuestion } from '@learning-app/syllabus';
import {
  MarkAnswer,
  MarkToRevisit,
  VisitedQuestions,
} from '../../machines/MCQ/types/context';

type AllQuestionsProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onClose: () => void;
  currentQuestionIdx: number;
  questions: McqQuestion[];
  onJumpToQuestion: (questionIdx: number) => void;
  markedToRevisit: MarkToRevisit;
  markAnswer: MarkAnswer;
  visited: VisitedQuestions;
};

const AllQuestions: FC<AllQuestionsProps> = ({
  isOpen,
  onClose,
  currentQuestionIdx,
  questions,
  onJumpToQuestion,
  markedToRevisit,
  markAnswer,
  visited,
}) => {
  const statusData = [
    { color: '#8FC37D', text: 'Answered' },
    { color: '#F07A7A', text: 'Unanswered' },
  ];
  const revisitData = [
    { color: '#79D3E7', text: 'To Revisit' },
    { color: 'white', text: 'Not visited' },
  ];
  const getQuestionColor = (index: number) => {
    if (markedToRevisit[index] === true) {
      // To Revisit
      return '#79D3E7';
    } else if (markAnswer[index] >= 0) {
      // Answer Marked
      return '#8FC37D';
    } else if (visited[index] === true) {
      // Unanswered
      return '#F07A7A';
    } else {
      return '$white';
    }
  };

  console.log('bbbbb', markedToRevisit);
  console.log('ccc', markAnswer);
  const ref = React.useRef(null);
  return (
    <Modal
      size="full"
      p="$5"
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">All Questions</Heading>
          <ModalCloseButton>
            <CloseIcon size="sm" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody bgColor="#e5e5e5" pt="$7">
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap="$1"
            justifyContent="center"
          >
            {questions.map((question, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  onJumpToQuestion(index);
                  onClose();
                }}
              >
                <Box
                  bg={getQuestionColor(index)}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="$lg"
                  borderColor={'$black'}
                  borderWidth={currentQuestionIdx === index ? '$2' : undefined}
                  mb="$4"
                  width="$12"
                  height="$12"
                >
                  <Text color="$black" fontWeight="$bold">
                    {index + 1}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
          </Box>
        </ModalBody>
        <ModalFooter bgColor="#e5e5e5">
          <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" pr="$5">
              {statusData.map((status, index) => (
                <Box key={index} display="flex" flexDirection="row">
                  <Box
                    width={4}
                    p="$2.5"
                    borderRadius="$full"
                    bgColor={status.color}
                    mr="$1.5"
                    mb={3}
                  ></Box>
                  <Text>{status.text}</Text>
                </Box>
              ))}
            </Box>
            <Box display="flex" flexDirection="column" pr="$5">
              {revisitData.map((revisit, index) => (
                <Box key={index} display="flex" flexDirection="row">
                  <Box
                    width={4}
                    p="$2.5"
                    borderRadius="$full"
                    bgColor={revisit.color}
                    mr="$1.5"
                    mb={3}
                  ></Box>
                  <Text>{revisit.text}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AllQuestions;
