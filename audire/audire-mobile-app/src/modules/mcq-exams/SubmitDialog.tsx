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
  ButtonText,
  Text,
  Button,
} from '@gluestack-ui/themed';

import { TouchableOpacity } from 'react-native';

type SubmitDialogProps = ComponentProps<typeof Box> & {
  isOpen: boolean;
  onClose: () => void;
};

const SubmitDialog: FC<SubmitDialogProps> = (props) => {
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
        <ModalBody>
          <Box>
            <Text color="black">
              You have 10 unattended questions and 3 questions you had to
              revisit.
            </Text>
            <Text color="black" pt="$4">
              Are you sure you want to submit the test ?
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <TouchableOpacity>
            <Box m="$6">
              <Button variant="outline" action="secondary">
                <ButtonText fontSize="$sm" fontWeight="$medium">
                  cancel
                </ButtonText>
              </Button>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box>
              <Button variant="solid" bg="#8D0C8A" onPress={() => {}}>
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
export default SubmitDialog;
