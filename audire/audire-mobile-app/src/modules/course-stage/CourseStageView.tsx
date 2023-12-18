import { Box } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import SubjectCard from './subject-card/SubjectCard';
import { useSubjects } from '@learning-app/syllabus';

type CourseStageViewProps = {
  stageId: string;
};

const CourseStageView: FC<CourseStageViewProps> = ({ stageId }) => {
  const { data: { data: subjects } = { data: [] } } = useSubjects({ stageId });

  return (
    <Box
      flex={1}
      bgColor="$white"
      w="$full"
      borderTopLeftRadius="$3xl"
      borderTopRightRadius="$3xl"
      elevation="$1.5"
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
          key={subject.id}
          subject={subject.title}
          href={`/course-subjects/${subject.id}`}
          description={subject.description}
        />
      ))}
    </Box>
  );
};

export default CourseStageView;
