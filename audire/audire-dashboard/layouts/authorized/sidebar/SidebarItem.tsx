import { Button, ButtonGroup } from '@nextui-org/react';
import { LuAlignEndHorizontal } from 'react-icons/lu';
import { MdOutlineSubject, MdOutlineTopic } from 'react-icons/md';
import { PiStudent, PiExam } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TfiIdBadge } from 'react-icons/tfi';
import React from 'react';
import { useRouter } from 'next/router';

const buttons = [
  {
    icon: LuAlignEndHorizontal,
    text: 'Dashboard',
    link: '/',
  },
  { icon: MdOutlineSubject, text: 'Subjects', link: '/syllabus/Subjects' },
  { icon: MdOutlineTopic, text: 'Topics', link: '/syllabus/Topics' },
  { icon: PiStudent, text: 'Students', link: '/batch/Students' },
  { icon: TfiIdBadge, text: 'Batches', link: '#' },
  { icon: PiExam, text: 'Test Series', link: '#' },
  { icon: IoMdNotificationsOutline, text: 'Notifications', link: '#' },
];

const SidebarItem = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const handleButtonClick = () => {
  //   setIsSidebarOpen(false);
  // };

  const router = useRouter();
  const path = router.asPath.split('?')[0];
  console.log('Current Route', router.asPath);

  return (
    <div className="flex flex-col space-y-6 w-64">
      {buttons.map((button, index) => (
        <ButtonGroup key={index}>
          <Button
            className={`w-full text-xl ${
              button.link === path ? 'bg-blue-500' : ''
            }`}
          >
            {React.createElement(button.icon, {
              color: button.link === path ? 'white' : 'black',
            })}
            <a
              href={button.link}
              className={`text-${
                button.link === path ? 'white' : 'black'
              } hover:text-blue-500`}
            >
              <h4
                className={`font-semibold text-xl ${
                  button.link === path ? 'text-white' : ''
                }`}
              >
                {button.text}
              </h4>
            </a>
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default SidebarItem;
