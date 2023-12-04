import React from 'react';
import { Button } from '@nextui-org/react';

const SubjectView = () => {
  return (
    <div>
      <div className="grid grid-cols-2 place-content-between m-4">
        <div className="font-bold text-2xl">Subjects</div>
        <div>
          <Button color="secondary">Button</Button>
        </div>
      </div>
    </div>
  );
};

export default SubjectView;
