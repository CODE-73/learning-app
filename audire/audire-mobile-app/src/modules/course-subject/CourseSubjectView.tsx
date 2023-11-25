import React from 'react';
import { View } from 'react-native';
import TopicCard from './topic-card/TopicCard';

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
    <View>
      {topics.map((topic) => (
        <TopicCard
          key={topic.name}
          topic={topic.name}
          href={topic.link}
          description={topic.description}
        />
      ))}
    </View>
  );
};

export default CourseSubjectView;
