import {
  Button,
  // User as Topic,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure
} from '@nextui-org/react';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { columns } from './data';
// import TopicForm from './TopicForm';
import {
  TopicWithNumQuestions,
  useTopicDelete,
  useTopics,
} from '@learning-app/syllabus';
import ConfirmDeleteDialog from 'components/ConfirmDeleteDialog';
import CourseStageSelector from 'components/CourseStageSelector';
import CourseSubjectSelector from 'components/CourseSubjectSelector';
import { FC } from 'react';
import TopicFormDialog from './TopicFormDialog';

const TopicListView: FC = () => {
  const [subjectId, setSelectedSubject] = useState<string | undefined>(
    undefined
  );
  const [stageId, setSelectedStage] = useState<string | undefined>(undefined);
  const [activeTopic, setActiveTopic] = useState<TopicWithNumQuestions | null>(null);

  const {
    data: { data: topics } = {
      data: [],
    },
  } = useTopics({
    subjectId,
  });
  const { trigger } = useTopicDelete();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteDialogOpen,
    onOpen: openDeleteDialog,
    onOpenChange: toggleDeleteDialog,
  } = useDisclosure();

  const renderCell = React.useCallback(
    (topic: TopicWithNumQuestions, columnKey: React.Key) => {
      const cellValue = topic[columnKey as keyof TopicWithNumQuestions];

      switch (columnKey) {
        case 'topic':
          return <div>{topic.title}</div>;

        case 'description':
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
              <p className="text-bold text-sm capitalize text-default-400">
                {topic.description}
              </p>
            </div>
          );

        case 'video':
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {topic.videoLink ? '✅' : '❌'}
            </Chip>
          );

        case 'studyMaterial':
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {topic.studyMaterial ? '✅' : '❌'}
            </Chip>
          );

        case 'mcqQuestion':
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {topic.numQuestion > 0
                ? `✅ ${topic.numQuestion} MCQs`
                : '❌'}
            </Chip>
          );

        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
              </Tooltip>
              <Tooltip content="Edit topic">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <CiEdit
                    onClick={() => {
                      setActiveTopic(topic);
                      onOpen();
                    }}
                  />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete topic">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDelete
                    onClick={() => {
                      setActiveTopic(topic);
                      openDeleteDialog();
                    }}
                  />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpen, openDeleteDialog]
  );

  return (
    <div className="flex-grow m-8">
      <TopicFormDialog
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isNew={activeTopic === null}
        subjectId={subjectId}
        topicId={activeTopic?.id}
        stageId={stageId}
      />
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onCancel={toggleDeleteDialog}
        onConfirm={() => {
          if (activeTopic) {
            trigger({
              topicId: activeTopic.id,
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
      {/* <TopicForm isOpen={isOpen} onOpenChange={onOpenChange} /> */}
      <div className="flex items-center justify-between ">
        <h1 className=" text-2xl font-bold">Topics</h1>

        <div className="">
          <Button
            color="primary"
            onPress={onOpen}
            onClick={() => {
              setActiveTopic(null);
            }}
          >
            <IoMdAdd />
            Add Topic
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3 m-8 ">
        <CourseStageSelector
          value={stageId}
          onChange={({ stageId }) => {
            setSelectedStage(stageId ?? undefined);
          }}
        />

        <CourseSubjectSelector
          stageId={stageId}
          value={subjectId}
          onChange={({ subjectId }) => {
            setSelectedSubject(subjectId ?? undefined);
          }}
        />
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
        <TableBody items={topics}>
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
export default TopicListView;
