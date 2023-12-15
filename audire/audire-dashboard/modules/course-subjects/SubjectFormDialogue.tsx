import { Modal, ModalContent } from '@nextui-org/react';
import SubjectForm from './SubjectForm';
import { FC } from 'react';

interface SubjectFormDialogueProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const SubjectFormDialogue: FC<SubjectFormDialogueProps> = ({
  isOpen,
  onOpenChange,
}) => (
  <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
    <ModalContent>{(onClose) => <SubjectForm />}</ModalContent>
  </Modal>
);

export default SubjectFormDialogue;
