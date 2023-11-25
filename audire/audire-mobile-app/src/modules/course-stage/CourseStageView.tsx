import React from 'react';
import { View } from 'react-native';
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
    <View>
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.name}
          subject={subject.name}
          href={subject.link}
          description={subject.description}
        />
      ))}
    </View>
  );
};

export default CourseStageView;
