import React, { ComponentProps, FC } from 'react';
import { IoMdClose } from 'react-icons/io';
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

type AllQuestionsProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onClose: () => void;
};

const AllQuestions: FC<AllQuestionsProps> = (props) => {
  const questionBoxs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const statusData = [
    { color: '#8FC37D', text: 'Answered' },
    { color: '#F07A7A', text: 'Unanswered' },
  ];
  const revisitData = [
    { color: '#79D3E7', text: 'To Revisit' },
    { color: 'white', text: 'Not visited' },
  ];
  const ref = React.useRef(null);
  return (
    <Modal
      size="full"
      p="$5"
      isOpen={props.isOpen}
      onClose={props.onClose}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">All Questions</Heading>
          <ModalCloseButton>
            <IoMdClose size={30} />
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
            {questionBoxs.map((questionBox) => (
              <TouchableOpacity>
                <Box
                  key={questionBox}
                  bg="$white"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="$lg"
                  mb="$4"
                  width="$12"
                  height="$12"
                >
                  <Text color="$black" fontWeight="$bold">
                    {questionBox}
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
