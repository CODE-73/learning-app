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
      status: 'Active',
    },
    {
      key: '2',
      serialNumber: '2',
      name: 'Fahim Ali Zain',
      number: '956714336',
      course: 'CMA',
      status: 'Active',
    },
    {
      key: '3',
      serialNumber: '3',
      name: 'Mohammed Ramees',
      number: '956234567',
      course: 'CA',
      status: 'Paused',
    },
    {
      key: '4',
      serialNumber: '4',
      name: 'fabinsha',
      number: '908767855',
      course: 'CMA',
      status: 'Active',
    },
    {
      key: '5',
      serialNumber: '5',
      name: 'Rayif',
      number: '908767855',
      course: 'CMA',
      status: 'Poused',
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
      key: 'status',
      label: 'STATUS',
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
