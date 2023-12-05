import React from 'react';
import { FC } from 'react';
import SubjectForm from './SubjectForm';
import { useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User as Topic,
} from '@nextui-org/react';

import { columns, topics } from './data';

type Topic = (typeof topics)[0];
const SubjectListView: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback((topic: Topic, columnKey: React.Key) => {
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
    }
  }, []);
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

export default SubjectListView;
