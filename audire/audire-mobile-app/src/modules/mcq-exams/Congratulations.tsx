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
  ModalFooter,
  Text,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
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
          <Heading></Heading>
          <ModalCloseButton>
            <CloseIcon size="sm" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody pt="$7">
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap="$1"
            justifyContent="center"
          >
            <Heading pb="$7" fontSize="$2xl">
              Congratulations!
            </Heading>
            <Box>
              <Congratulations />
            </Box>
          </Box>
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
        <TouchableOpacity>
          <Box>
            <Button bg="#8D0C8A" onPress={() => router.replace('/')}>
              <ButtonText fontSize="$md" fontWeight="bold">
                Home Page
              </ButtonText>
            </Button>
          </Box>
        </TouchableOpacity>
      </ModalContent>
    </Modal>
  );
};
export default CongratulationsDialog;
