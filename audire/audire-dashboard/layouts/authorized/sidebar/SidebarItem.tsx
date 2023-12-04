import React from 'react'; //{ useState }
import { Button, ButtonGroup } from '@nextui-org/react';
import { LuAlignEndHorizontal } from 'react-icons/lu';
import { MdOutlineSubject, MdOutlineTopic } from 'react-icons/md';
import { PiStudent, PiExam } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TfiIdBadge } from 'react-icons/tfi';

const buttons = [
  {
    icon: LuAlignEndHorizontal,
    text: 'Dashboard',
    link: '/',
  },
  { icon: MdOutlineSubject, text: 'Subjects', link: '/syllabus/subjects' },
  { icon: MdOutlineTopic, text: 'Topics', link: '#' },
  { icon: PiStudent, text: 'Students', link: '/batch/Students' },
  { icon: TfiIdBadge, text: 'Batches', link: '' },
  { icon: PiExam, text: 'Test Series', link: '#' },
  { icon: IoMdNotificationsOutline, text: 'Notifications', link: '#' },
];

const SidebarItem = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const handleButtonClick = () => {
  //   setIsSidebarOpen(false);
  // };

  return (
    <div
      className="flex flex-col space-y-6 w-64 "
      // isSidebarOpen ? '' : 'hidden'
    >
      {buttons.map((button, index) => (
        <ButtonGroup key={index}>
          <Button className="w-full text-xl">
            {React.createElement(button.icon, { color: 'black' })}
            <a href={button.link} className="text-black hover:text-blue-500">
              <h4 className="font-semibold text-xl">{button.text}</h4>
            </a>
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default SidebarItem;
