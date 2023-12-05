import React from 'react';
import { FC } from 'react';
import SubjectForm from './SubjectForm';
import { useDisclosure } from '@nextui-org/react';
import { Card, Divider, Input, Button } from '@nextui-org/react';

const SubjectListView: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <SubjectForm isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex justify-between m-4">
        <div className="font-bold text-2xl">Subjects</div>
        <div>
          <Button color="secondary" onPress={onOpen}>
            ADD
          </Button>
        </div>
      </div>
      <div className=" m-8 ">
        <Card className="max-w-[400px] bg-[#d4d4d8] text-black w-screen ">
          <div className=" m-4 ">
            <Input type="Subject" label="Subject" labelPlacement="outside" />
          </div>
          <div className=" m-4 ">
            <Input
              type="Description"
              label="Description"
              labelPlacement="outside"
            />
          </div>
          <Divider />
          <div>
            <Button color="primary" variant="light">
              Save
            </Button>{' '}
            <Button color="primary" variant="light">
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubjectListView;
