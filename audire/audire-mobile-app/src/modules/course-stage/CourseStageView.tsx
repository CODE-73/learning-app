import { Box } from '@gluestack-ui/themed';
import React from 'react';
import SubjectCard from './subject-card/SubjectCard';

const subjects = [
  {
    name: 'Accounting',
    link: '/course-subjects/Accounting',
    description: 'Learn the principles of accounting and financial management.',
  },
  {
    name: 'Business Law',
    link: '/course-subjects/business-law',
    description:
      'Explore legal aspects related to business operations and contracts.',
  },
  {
    name: 'Quantitative Aptitude',
    link: '/course-subjects/quant-apt',
    description:
      'Enhance your quantitative skills for data analysis and decision-making.',
  },
  {
    name: 'Business Economics',
    link: '/course-subjects/business-economics',
    description:
      'Study economic principles and their application in the business environment.',
  },
];

const CourseStageView = () => {
  return (
    <Box
      flex={1}
      bgColor="$white"
      w="$full"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      //Android
      elevation="$1.5"
      // iOS
      shadowColor="$black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.name}
          subject={subject.name}
          href={subject.link}
          description={subject.description}
        />
      ))}
    </Box>
  );
};

export default CourseStageView;
