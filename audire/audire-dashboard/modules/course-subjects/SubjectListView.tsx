import React from 'react';
import { FC } from 'react';
import SubjectForm from './SubjectForm';
import { useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { IoMdAdd } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  User as Subject,
} from '@nextui-org/react';
import { Select, SelectItem, SelectSection } from '@nextui-org/react';

import { columns, subjects } from './data';
import { useCourses } from '@learning-app/syllabus';

type Subject = (typeof subjects)[0];
const SubjectListView: FC = () => {
  const { data, isLoading } = useCourses();
  console.info({ data, isLoading }, data?.data);
  const stagesData = data?.data;
  const Stages = stagesData?.map((stageItem) => ({
    title: stageItem.title,
    Stages: ['Foudation', 'Intermediate', 'Final'],
  }));
  const headingClasses =
    'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small';
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback(
    (topic: Subject, columnKey: React.Key) => {
      switch (columnKey) {
        case 'topic':
          return <div>{topic.topic}</div>;

        case 'description':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-400">
                {topic.description}
              </p>
            </div>
          );

        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
              </Tooltip>
              <Tooltip content="Edit subject">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <CiEdit onClick={onOpen} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete subject">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDelete />
                </span>
              </Tooltip>
            </div>
          );
      }
    },
    []
  );
  return (
    <div>
      <Select
        label="Course"
        placeholder="Stage"
        className="max-w-xs"
        scrollShadowProps={{
          isEnabled: false,
        }}
      >
        {(Stages || []).map((section, index) => (
          <SelectSection
            key={index}
            title={section.title}
            classNames={{
              heading: headingClasses,
            }}
          >
            {section.Stages.map((stage) => (
              <SelectItem key={stage}>{stage}</SelectItem>
            ))}
          </SelectSection>
        ))}
      </Select>
      <SubjectForm isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex justify-between m-4">
        <div className="font-bold text-2xl">Subjects</div>
        <div>
          <Button color="primary" onPress={onOpen}>
            <IoMdAdd />
            Create Table
          </Button>
        </div>
      </div>

      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={subjects}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubjectListView;
