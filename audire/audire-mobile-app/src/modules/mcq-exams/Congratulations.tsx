import React, { ComponentProps, FC } from 'react';
import { CloseIcon } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import {
  Heading,
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Center,
} from '@gluestack-ui/themed';
import Congratulations from '/assets/Congratulations.svg';

type AllQuestionsProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onClose: () => void;

  markObtained: number;
  maxMark: number;
  numQuestions: number;
};

const CongratulationsDialog: FC<AllQuestionsProps> = (props) => {
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
          <Heading fontSize="$2xl">Congratulations!</Heading>
          <ModalCloseButton
            onPress={() => {
              router.replace('/');
              props.onClose();
            }}
          >
            <CloseIcon size="sm" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Center>
            <Congratulations />
          </Center>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text fontSize="$lg" fontWeight="$bold" py="$4">
              The score you obtained is: {props.markObtained}
            </Text>
            <Text fontWeight="$extrabold" fontSize="$xl">
              {props.markObtained} / {props.maxMark}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" flexDirection="row"></Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CongratulationsDialog;
