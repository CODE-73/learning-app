import React, { ComponentProps, FC } from 'react';
import { Linking } from 'react-native';
import {
  Heading,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  ButtonText,
  Button,
} from '@gluestack-ui/themed';

type ConfirmDeleteAccountDialogProps = ComponentProps<typeof Modal> & {
  isOpen: boolean;
  onClose: () => void;
};

const ConfirmDeleteAccountDialog: FC<ConfirmDeleteAccountDialogProps> = (
  props
) => {
  const ref = React.useRef(null);

  const handleDeleteAccount = () => {
    // Open the link in the browser
    Linking.openURL('https://audirelearning.com/contact-us');
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg" color="$red">
            Delete your Account?
          </Heading>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>Are you sure want to Delete your Account?</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              props.onClose();
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            borderWidth="$0"
            onPress={() => {
              props.onClose();

              handleDeleteAccount();
            }}
          >
            <ButtonText>Delete Account</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteAccountDialog;
