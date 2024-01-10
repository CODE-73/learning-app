import React, { ComponentProps, FC } from 'react';

import {
  Heading,
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonText,
  Text,
  Button,
} from '@gluestack-ui/themed';

import { TouchableOpacity } from 'react-native';

type SubmitDialogProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  numUnattended: number;
  numToRevisit: number;
};

const ConfirmSubmitDialog: FC<SubmitDialogProps> = (props) => {
  const ref = React.useRef(null);
  const handleClose = () => {
    props.onClose();
  };
  const handleYesClick = () => {
    props.onConfirm();
    handleClose();
  };
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
        </ModalHeader>
        <ModalBody>
          <Box>
            <Text color="black">
              You have {props.numUnattended} unattended questions and{' '}
              {props.numToRevisit}
              questions you had to revisit.
            </Text>
            <Text color="black" pt="$4">
              Are you sure you want to submit the test ?
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <TouchableOpacity>
            <Box m="$6">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleClose}
              >
                <ButtonText fontSize="$sm" fontWeight="$medium">
                  cancel
                </ButtonText>
              </Button>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box>
              <Button variant="solid" bg="#8D0C8A" onPress={handleYesClick}>
                <ButtonText fontSize="$md" fontWeight="bold">
                  Yes
                </ButtonText>
              </Button>
            </Box>
          </TouchableOpacity>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ConfirmSubmitDialog;
