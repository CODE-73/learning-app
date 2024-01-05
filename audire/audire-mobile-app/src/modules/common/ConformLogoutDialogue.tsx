import React, { ComponentProps, FC } from 'react';
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
import { useLogout } from '@learning-app/auth';

type ConformLogoutDialogueProps = ComponentProps<typeof Modal> & {
  isOpen: boolean;
  onClose: () => void;
};

const ConformLogoutDialogue: FC<ConformLogoutDialogueProps> = (props) => {
  const { trigger } = useLogout();
  const onLogout = async () => {
    try {
      await trigger();
    } catch (e) {
      console.error('Error triggering logout in:', e);
    }
  };
  const ref = React.useRef(null);
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg" color="$red">
            Log out?
          </Heading>
          <ModalCloseButton></ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Are you sure you want to log out from the Audire App?</Text>
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
              onLogout();
            }}
          >
            <ButtonText>LogOut</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConformLogoutDialogue;
