import React from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

const StudentsView = () => {
  const rows = [
    {
      key: '1',
      serialNumber: '1',
      name: 'Mohammed Sameer',
      number: '7034278767',
      course: 'CA',
      CourseStage: 'Stage 1',
      status: 'Active',
      dateAndTime: '2023-12-04 12:00 PM',
      enrolmentDate: '2023-01-01',
      batchEndDate: '2023-06-30',
    },
    {
      key: '2',
      serialNumber: '2',
      name: 'Fahim Ali Zain',
      number: '956714336',
      course: 'CMA',
      CourseStage: 'Stage 1',
      status: 'Active',
      dateAndTime: '2023-12-04 12:00 PM',
      enrolmentDate: '2023-01-01',
      batchEndDate: '2023-06-30',
    },
    {
      key: '3',
      serialNumber: '3',
      name: 'Mohammed Ramees',
      number: '956234567',
      course: 'CA',
      CourseStage: 'Stage 1',
      status: 'Paused',
      dateAndTime: '2023-12-04 12:00 PM',
      enrolmentDate: '2023-01-01',
      batchEndDate: '2023-06-30',
    },
    {
      key: '4',
      serialNumber: '4',
      name: 'fabinsha',
      number: '908767855',
      course: 'CMA',
      CourseStage: 'Stage 1',
      status: 'Active',
      dateAndTime: '2023-12-04 12:00 PM',
      enrolmentDate: '2023-01-01',
      batchEndDate: '2023-06-30',
    },
    {
      key: '5',
      serialNumber: '5',
      name: 'Rayif',
      number: '908767855',
      course: 'CMA',
      CourseStage: 'Stage 1',
      status: 'Poused',
      dateAndTime: '2023-12-04 12:00 PM',
      enrolmentDate: '2023-01-01',
      batchEndDate: '2023-06-30',
    },
  ];

  const columns = [
    {
      key: 'serialNumber',
      label: 'Sl.No',
    },
    {
      key: 'name',
      label: 'NAME',
    },
    {
      key: 'number',
      label: 'CONTACT',
    },
    {
      key: 'course',
      label: 'COURSE',
    },
    {
      key: 'CourseStage',
      label: 'Stage',
    },
    {
      key: 'status',
      label: 'STATUS',
    },
    {
      key: 'dateAndTime',
      label: 'DATE & TIME',
    },
    {
      key: 'enrolmentDate',
      label: 'Enrolment Date',
    },
    {
      key: 'batchEndDate',
      label: 'Batch End Date',
    },
  ];

  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default StudentsView;
