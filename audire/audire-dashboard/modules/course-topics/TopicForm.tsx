import React from 'react';
import { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaFileUpload } from 'react-icons/fa';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Checkbox,
} from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';

interface TopicFormProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

interface IFormInput {
  Subject: string;
  Description: string;
  Video: string;
  Topic: string;
  StudyMeterial: string;
  MCQQuestion: string;
}

const TopicForm: FC<TopicFormProps> = ({ isOpen, onOpenChange }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className=" text-2xl font-bold">
                  Topics
                </ModalHeader>
                <ModalBody>
                  <label className=" text-sm font-medium">Topic</label>
                  <input
                    {...register('Topic' as const)}
                    style={{
                      border: '1px solid black',
                      height: '30px',
                      padding: '8px',
                    }}
                  />

                  <label className=" text-sm font-medium">Description</label>
                  <input
                    {...register('Description' as const)}
                    style={{
                      border: '1px solid black',
                      height: '30px',
                      padding: '8px',
                    }}
                  />
                  <div className="flex items-center justify-center border border-4 border-black-500 border-dashed p-4 ">
                    <label className="text-sm font-medium flex flex-col items-center justify-center">
                      Upload Video
                      <FaCloudUploadAlt className="text-2xl ml-2" />
                    </label>
                  </div>
                  <div className="flex items-center justify-center border border-4 border-black-500 border-dashed p-4">
                    <label className=" text-sm font-medium flex flex-col items-center justify-center">
                      Study Material
                      <FaFileUpload className="text-2xl ml-2" />
                    </label>
                  </div>

                  <div>
                    <div className="text-sm font-medium  p-2 ">
                      MCQ Question
                    </div>

                    <Accordion variant="splitted">
                      <AccordionItem
                        key="1"
                        aria-label="Add MSQ"
                        title="Add MSQ"
                      >
                        <div>
                          <label className=" text-sm font-medium mr-4">
                            Add Question
                          </label>
                          <Textarea
                            label="Question"
                            variant="bordered"
                            placeholder="Enter your question"
                            disableAnimation
                            disableAutosize
                            classNames={{
                              base: 'max-w-xs',
                              input: 'resize-y min-h-[40px]',
                            }}
                          />
                        </div>

                        <div className="pt-8">
                          <div>
                            <label className=" text-sm font-medium mr-4  ">
                              option 1
                            </label>
                            <input
                              className="rounded-lg mr-4"
                              {...register('Description' as const)}
                              style={{
                                border: '1px solid black',
                                height: '30px',
                                padding: '8px',
                              }}
                            />
                            <Checkbox defaultSelected size="md"></Checkbox>
                          </div>
                          <div className="pt-4">
                            <label className=" text-sm font-medium mr-4">
                              option 2
                            </label>
                            <input
                              className="rounded-lg mr-4"
                              {...register('Description' as const)}
                              style={{
                                border: '1px solid black',
                                height: '30px',
                                padding: '8px',
                              }}
                            />
                            <Checkbox defaultSelected size="md"></Checkbox>
                          </div>
                          <div className="pt-4">
                            <label className=" text-sm font-medium mr-4">
                              option 3
                            </label>
                            <input
                              className="rounded-lg mr-4"
                              {...register('Description' as const)}
                              style={{
                                border: '1px solid black',
                                height: '30px',
                                padding: '8px',
                              }}
                            />
                            <Checkbox defaultSelected size="md"></Checkbox>
                          </div>
                          <div className="pt-4">
                            <label className=" text-sm font-medium mr-4 ">
                              option 4
                            </label>
                            <input
                              className="rounded-lg mr-4"
                              {...register('Description' as const)}
                              style={{
                                border: '1px solid black',
                                height: '30px',
                                padding: '8px',
                              }}
                            />
                            <Checkbox defaultSelected size="md"></Checkbox>
                          </div>
                          <ModalFooter>
                            <Button
                              className="outline outline-1 outline-offset  h-6"
                              color="danger"
                              variant="light"
                            >
                              Cancel
                            </Button>

                            <Button
                              className=" h-6"
                              type="submit"
                              color="secondary"
                            >
                              Save
                            </Button>
                          </ModalFooter>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
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
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default TopicForm;
