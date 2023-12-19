import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { ModalFooter, Button, Textarea, Checkbox } from '@nextui-org/react';

const MCQDialog = () => (
  <Accordion variant="splitted">
    <AccordionItem key="1" aria-label="Add MSQ" title="Add MSQ">
      <div>
        <label className=" text-sm font-medium mr-4">Add Question</label>
        <Textarea
          label="Question"
          variant="bordered"
          placeholder="Enter your question"
          disableAnimation
          disableAutosize
          classNames={{
            base: 'max-w-xs',
            input: 'resize-y min-h-[40px]',
          }}
        />
      </div>

      <div className="pt-8">
        <div>
          <label className=" text-sm font-medium mr-4  ">option 1</label>
          <input
            className="rounded-lg mr-4"
            style={{
              border: '1px solid black',
              height: '30px',
              padding: '8px',
            }}
          />
          <Checkbox defaultSelected size="md"></Checkbox>
        </div>
        <div className="pt-4">
          <label className=" text-sm font-medium mr-4">option 2</label>
          <input
            className="rounded-lg mr-4"
            style={{
              border: '1px solid black',
              height: '30px',
              padding: '8px',
            }}
          />
          <Checkbox defaultSelected size="md"></Checkbox>
        </div>
        <div className="pt-4">
          <label className=" text-sm font-medium mr-4">option 3</label>
          <input
            className="rounded-lg mr-4"
            style={{
              border: '1px solid black',
              height: '30px',
              padding: '8px',
            }}
          />
          <Checkbox defaultSelected size="md"></Checkbox>
        </div>
        <div className="pt-4">
          <label className=" text-sm font-medium mr-4 ">option 4</label>
          <input
            className="rounded-lg mr-4"
            style={{
              border: '1px solid black',
              height: '30px',
              padding: '8px',
            }}
          />
          <Checkbox defaultSelected size="md"></Checkbox>
        </div>
        <ModalFooter>
          <Button
            className="outline outline-1 outline-offset  h-6"
            color="danger"
            type="button"
            variant="light"
          >
            Cancel
          </Button>

          <Button className=" h-6" type="submit" color="secondary">
            Save
          </Button>
        </ModalFooter>
      </div>
    </AccordionItem>
  </Accordion>
);

export default MCQDialog;
