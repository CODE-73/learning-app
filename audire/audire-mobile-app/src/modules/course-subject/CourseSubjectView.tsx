import React, { FC } from 'react';
import { useTopics } from '@learning-app/syllabus';
import TopicCard from './topic-card/TopicCard';
import { Box, Text, ScrollView } from '@gluestack-ui/themed';
import CommonGirl from '/assets/commonGirl.svg';

type CourseSubjectViewProps = {
  subjectId: string;
};

const CourseSubjectView: FC<CourseSubjectViewProps> = ({ subjectId }) => {
  const { data: { data: topics } = { data: [] } } = useTopics({
    subjectId,
    filters: {
      enabled: true,
    },
  });

  return (
    <Box flex={1} bgColor="$white" w="$full">
      <Text fontSize="$xl" color="black" fontWeight="bold" ml="$5" py="$8">
        Select a topic to learn today.
      </Text>
      <ScrollView px="$4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic.title}
            href={`/course-topics/${topic.id}`}
            description={topic.description}
          />
        ))}
      </ScrollView>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        position="absolute"
        bottom="$0"
        left="$0"
        right="$0"
        zIndex={-1}
      >
        <CommonGirl />
      </Box>
    </Box>
  );
};

export default CourseSubjectView;
