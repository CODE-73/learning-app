import React, { FC } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

type ConfirmDeleteDialogProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
};

const ConfirmDeleteDialog: FC<ConfirmDeleteDialogProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onCancel}
      backdrop="opaque"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete Subject
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to delete the subject?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onCancel}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onConfirm?.();
                  onCancel();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteDialog;
