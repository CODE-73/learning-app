import React from 'react';
import { FC } from 'react';
import { Modal, ModalContent } from '@nextui-org/react';
import SubjectForm from './SubjectForm';

interface SubjectFormProps {
  isNew?: boolean;
  subjectId?: string;
  stageId?: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

const SubjectFormDialogue: FC<SubjectFormProps> = ({
  isNew,
  stageId,
  subjectId,
  isOpen,
  onOpenChange,
}) => (
  <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
    <ModalContent>
      <SubjectForm
        isNew={isNew}
        stageId={stageId}
        subjectId={subjectId}
        onComplete={onOpenChange}
        onCancel={onOpenChange}
      />
    </ModalContent>
  </Modal>
);

export default SubjectFormDialogue;
