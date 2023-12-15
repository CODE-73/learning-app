import React from 'react';
import { FC } from 'react';
import { Subject, useSubjectUpsert } from '@learning-app/syllabus';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

interface SubjectFormProps {
  isOpen: boolean;
  onOpenChange: () => void;
  isNew?: boolean;
  activeSubject: Subject | null;
}

const SubjectFormSchema = z.object({
  subject: z.string(),
  description: z.string(),
});

type SubjectForm = z.infer<typeof SubjectFormSchema>;

const SubjectForm: FC<SubjectFormProps> = ({
  isOpen,
  onOpenChange,
  isNew,
  activeSubject,
}) => {
  const { trigger, isMutating } = useSubjectUpsert();

  const form = useForm<SubjectForm>({
    mode: 'onBlur',
    defaultValues: {
      subject: activeSubject?.title ?? '',
      description: activeSubject?.description ?? '',
    },
    resolver: zodResolver(SubjectFormSchema),
  });

  const upsertSubject = async (data: SubjectForm) => {
    try {
      const subject = await trigger({
        input: {
          id: activeSubject?.id ?? undefined,
          subject: data.subject,
          description: data.description,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <form onSubmit={form.handleSubmit(upsertSubject)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Subject</ModalHeader>
          <ModalBody>
            <h6>Subject</h6>
            <Input
              type="text"
              label="subject"
              placeholder="Enter the subject"
              onClear={() => console.log('clear')}
              {...form.register('subject')}
              style={{ height: '30px' }}
            />

            <Input
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              {...form.register('description')}
              style={{ height: '30px' }}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              className="outline outline-1 outline-offset"
              color="danger"
              variant="light"
              onClick={onOpenChange}
            >
              Cancel
            </Button>

            <Button type="submit" color="secondary" onClick={onOpenChange}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default SubjectForm;
