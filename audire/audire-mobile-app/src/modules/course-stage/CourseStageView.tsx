import { Box, Text } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import SubjectCard from './subject-card/SubjectCard';
import { useSubjects } from '@learning-app/syllabus';

import CommonGirl from '/assets/commonGirl.svg';
type CourseStageViewProps = {
  stageId: string;
};

const CourseStageView: FC<CourseStageViewProps> = ({ stageId }) => {
  const { data: { data: subjects } = { data: [] } } = useSubjects({
    stageId,
    filters: { enabled: true },
  });

  return (
    <Box display="flex" bgColor="$white" w="$full" flex={1}>
      <Text fontSize="$xl" color="black" fontWeight="$bold" ml="$5" py="$8">
        Select a Subject to start with.
      </Text>
      <Box px="$4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject.title}
            href={`/course-subjects/${subject.id}`}
            description={subject.description}
          />
        ))}
      </Box>
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

export default CourseStageView;
