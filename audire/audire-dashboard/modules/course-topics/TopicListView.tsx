import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User as Topic,
  Chip,
  Tooltip,
  ChipProps,
  Button,
} from '@nextui-org/react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { columns, topics } from './data';
import { useDisclosure } from '@nextui-org/react';
import TopicForm from './TopicForm';
import { FC } from 'react';

const statusColorMap: Record<string, ChipProps['color']> = {
  upload: 'success',
  non: 'danger',
};

type Topic = (typeof topics)[0];

const TopicListView: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCell = React.useCallback(
    (topic: Topic, columnKey: React.Key) => {
      const cellValue = topic[columnKey as keyof Topic];

      switch (columnKey) {
        case 'topic':
          return <div>{topic.topic}</div>;

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
            <Chip
              className="capitalize"
              color={statusColorMap[topic.video]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

        case 'studyMaterial':
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[topic.studyMaterial]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

        case 'mcqQuestion':
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[topic.mcqQuestion]}
              size="sm"
              variant="flat"
            >
              {cellValue}
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
                  <CiEdit onClick={onOpen} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete topic">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDelete />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpen]
  );

  return (
    <div>
      <TopicForm isOpen={isOpen} onOpenChange={onOpenChange} />
      <h1 className=" text-2xl font-bold">Topics</h1>

      <div className="">
        <Button color="primary" onPress={onOpen}>
          <IoMdAdd />
          Create Table
        </Button>
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
