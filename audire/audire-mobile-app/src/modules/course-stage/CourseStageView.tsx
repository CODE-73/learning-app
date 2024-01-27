import { Box, Text, ScrollView } from '@gluestack-ui/themed';
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
      <Text fontSize="$md" color="black" fontWeight="bold" ml="$5" pb="$3">
        Select a Subject to start with.
      </Text>
      <ScrollView px="$4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject.title}
            href={`/course-subjects/${subject.id}`}
            description={subject.description}
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

export default CourseStageView;
