import React from 'react';

import TopicCard from './topic-card/TopicCard';
import { Box } from '@gluestack-ui/themed';

const topics = [
  {
    name: 'topic1',
    link: '/course-topics/topic1',
    description: 'Learn the principles of accounting and financial management.',
  },
  {
    name: 'topic2',
    link: '/course-topics/topic2',
    description: 'Learn the principles of accounting and financial management.',
  },
  {
    name: 'topic3',
    link: '/course-topics/topic3',
    description: 'Learn the principles of accounting and financial management.',
  },
];

const CourseSubjectView = () => {
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
      {topics.map((topic) => (
        <TopicCard
          key={topic.name}
          topic={topic.name}
          href={topic.link}
          description={topic.description}
        />
      ))}
    </Box>
  );
};

export default CourseSubjectView;
