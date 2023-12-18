import React from 'react';
import HomeFooterView from '../footer/HomeFooterView';
import StageCard from './stage-card/StageCard';
import { Box } from '@gluestack-ui/themed';
import { useCourses } from '@learning-app/syllabus';

const TEMP_COURSE = 'CMA';

const HomeView = () => {
  const { data: { data: courses } = { data: [] } } = useCourses();

  return (
    <Box
      borderTopRightRadius="$2xl"
      borderTopLeftRadius="$2xl"
      flex={1}
      bgColor="white"
      width="$full"
      elevation="$1.5"
      shadowColor="black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      {((courses ?? []).find((c) => c.title === TEMP_COURSE)?.stages ?? []).map(
        (stage) => (
          <StageCard
            key={stage.id}
            stage={stage.title}
            href={`/course-stages/${stage.id}`}
          />
        )
      )}
      <HomeFooterView />
    </Box>
  );
};

export default HomeView;
