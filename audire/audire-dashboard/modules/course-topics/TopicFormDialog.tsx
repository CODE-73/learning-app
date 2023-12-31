import React from 'react';
import { FC } from 'react';
import { Modal, ModalContent } from '@nextui-org/react';
import TopicForm from './TopicForm';

interface TopicFormProps {
  isNew?: boolean;
  topicId?: string;
  subjectId?: string;
  isOpen: boolean;
  onOpenChange: () => void;
  stageId: string | undefined;
}

const TopicFormDialog: FC<TopicFormProps> = ({
  isNew,
  topicId,
  subjectId,
  isOpen,
  onOpenChange,
  stageId,
}) => {
  return (
    <Modal
      className="p-8 "
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        <TopicForm
          isNew={isNew}
          stageId={stageId}
          subjectId={subjectId}
          topicId={topicId}
          onComplete={onOpenChange}
          onCancel={onOpenChange}
        />
      </ModalContent>
    </Modal>
  );
};

export default TopicFormDialog;
