import React from 'react';
import { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

interface SubjectFormProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

interface IFormInput {
  Subject: string;
  Description: string;
}
const SubjectForm: FC<SubjectFormProps> = ({ isOpen, onOpenChange }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  Subject
                </ModalHeader>
                <ModalBody>
                  <label>Topic</label>
                  <input
                    {...register('Subject' as const)}
                    style={{ border: '1px solid black', height: '30px' }}
                  />

                  <label>Description</label>
                  <input
                    {...register('Description' as const)}
                    style={{ border: '1px solid black', height: '30px' }}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button
                    className="outline outline-1 outline-offset"
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>

                  <Button type="submit" color="secondary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubjectForm;
