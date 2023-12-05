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

const DashboardView = () => {
  const rows = [
    {
      key: '1',
      serialNumber: '1',
      name: 'Mohammed Sameer',
      number: '7034278767',
      course: 'CA',
      CourseStage: 'Stage 1',
      dateAndTime: '2023-12-04 12:00 PM',
    },
    {
      key: '2',
      serialNumber: '2',
      name: 'Fahim Ali Zain',
      number: '956714336',
      course: 'CMA',
      CourseStage: 'Stage 1',
      dateAndTime: '2023-12-04 12:00 PM',
    },
    {
      key: '3',
      serialNumber: '3',
      name: 'Mohammed Ramees',
      number: '956234567',
      course: 'CA',
      CourseStage: 'Stage 3',
      dateAndTime: '2023-12-04 12:00 PM',
    },
    {
      key: '4',
      serialNumber: '4',
      name: 'fabinsha',
      number: '908767855',
      course: 'CMA',
      CourseStage: 'Stage 5',
      dateAndTime: '2023-12-04 12:00 PM',
    },
    {
      key: '5',
      serialNumber: '5',
      name: 'Rayif',
      number: '908767855',
      course: 'CMA',
      dateAndTime: '2023-12-04 12:00 PM',
    },
  ];

  const columns = [
    {
      key: 'serialNumber',
      label: 'Sl.No',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'number',
      label: 'Contact',
    },
    {
      key: 'course',
      label: 'Course',
    },

    {
      key: 'dateAndTime',
      label: 'DATE & TIME',
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

export default DashboardView;
