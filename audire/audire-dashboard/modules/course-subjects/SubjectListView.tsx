import { Subject } from '@learning-app/syllabus';
import ConfirmDeleteDialog from 'components/ConfirmDeleteDialog';
import React, { FC, useState } from 'react';
import SubjectFormDialog from './SubjectFormDialogue';

import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from '@nextui-org/react';
import { CiEdit } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

import { useSubjectDelete, useSubjects } from '@learning-app/syllabus';
import CourseStageSelector from 'components/CourseStageSelector';
import { columns } from './data';

const SubjectListView: FC = () => {
  const [stageId, setSelectedStage] = useState<string | undefined>(undefined);
  const [activeSubject, setactiveSubject] = useState<Subject | null>(null);

  const { data: { data: subjects } = { data: [] } } = useSubjects({
    stageId,
  });
  const { trigger } = useSubjectDelete();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteDialogOpen,
    onOpen: openDeleteDialog,
    onOpenChange: toggleDeleteDialog,
  } = useDisclosure();

  const renderCell = React.useCallback(
    (subject: Subject, columnKey: React.Key) => {
      switch (columnKey) {
        case 'subject':
          return <div> {subject.title}</div>;

        case 'description':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-400">
                {subject.description}
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
                  <CiEdit
                    onClick={() => {
                      setactiveSubject(subject);
                      onOpen();
                    }}
                  />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete subject">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDelete
                    onClick={() => {
                      setactiveSubject(subject);
                      openDeleteDialog();
                    }}
                  />
                </span>
              </Tooltip>
            </div>
          );
      }
    },
    [onOpen, openDeleteDialog]
  );
  return (
    <div className="flex-grow">
      <SubjectFormDialog
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isNew={activeSubject === null}
        stageId={stageId}
        subjectId={activeSubject?.id}
      />
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onCancel={toggleDeleteDialog}
        onConfirm={() => {
          if (activeSubject) {
            console.log(activeSubject.id);
            trigger({
              subjectId: activeSubject.id,
            })
              .then((response) => {
                console.log('Delete success:', response);
              })
              .catch((error) => {
                console.error('Delete error:', error);
              });
          }
        }}
      />
      <div className="flex justify-between m-4">
        <div className="font-bold text-2xl">Subjects</div>
        <div>
          <Button
            color="primary"
            onPress={onOpen}
            onClick={() => {
              setactiveSubject(null);
            }}
          >
            <IoMdAdd />
            Add Subject
          </Button>
        </div>
      </div>
      <div className="m-8">
        <CourseStageSelector
          value={stageId}
          onChange={({ stageId, courseId }) => {
            setSelectedStage(stageId ?? undefined);
          }}
        />
      </div>
      <Table className="w-full" aria-label="Example table with custom cells">
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
