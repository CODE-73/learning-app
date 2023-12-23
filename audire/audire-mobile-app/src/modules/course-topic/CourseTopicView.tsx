import { Box, Text } from '@gluestack-ui/themed';
import VideoComponent from './VideoComponent';
import StudyMeterial from './StudyMeterial';
import SampleQuestions from './SampleQuestions';
import McqTestCard from './McqTestCard';
import React from 'react';

const CourseTopicView = () => {
  return (
    <Box flexDirection="column" flex={1} bgColor="white" w="$full">
      <Box ml="$5" pt="$5" pb="$1">
        <Text fontSize="$xl" color="black" fontWeight="bold" my="$2">
          CA-Primary
        </Text>
        <Text fontSize="$md" color="black" fontWeight="$normal">
          Course Topic description
        </Text>
      </Box>

      <Box h={0.3} backgroundColor="black" mx={17}></Box>

      <Box ml="$5" pt="$3">
        <Text fontSize="$lg" color="black" fontWeight="bold" my="$2">
          Video Class Name
        </Text>
        <Text fontSize="$md" color="black" fontWeight="$normal" pb="$1">
          Presenter Name
        </Text>
      </Box>

      <VideoComponent />
      <StudyMeterial />
      <SampleQuestions />
      <McqTestCard />
    </Box>
  );
};

export default CourseTopicView;
