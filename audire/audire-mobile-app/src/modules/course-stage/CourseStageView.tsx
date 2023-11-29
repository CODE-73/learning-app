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
      sx={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '$3xl',
        borderTopRightRadius: '$3xl',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
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
