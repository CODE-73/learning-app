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
} from '@gluestack-ui/themed';
import Congratulations from '/assets/Congratulations.svg';

type AllQuestionsProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onClose: () => void;
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
              The score you obtained is{' '}
            </Text>
            <Text fontWeight="$extraBlack" fontSize="$3xl">
              10/15
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
