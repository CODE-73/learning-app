import { ScrollView } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import VideoComponent from './VideoComponent';
import StudyMaterial from './StudyMaterial';
// import SampleQuestions from './SampleQuestions';
import McqTestCard from './McqTestCard';
import React, { FC } from 'react';
import { useTopic } from '@learning-app/syllabus';

type CourseTopicViewProps = {
  topicId: string;
  title: string;
  description: string;
};

const CourseTopicView: FC<CourseTopicViewProps> = ({ topicId }) => {
  const { data: topic } = useTopic({ topicId });

  return (
    <ScrollView style={{ width: '100%' }}>
      <Box flexDirection="column" flex={1} bgColor="white" w="$full">
        <Box ml="$5" pt="$5" pb="$1">
          <Text fontSize="$xl" color="black" fontWeight="bold" my="$2">
            {topic?.title}
          </Text>
          <Text fontSize="$md" color="black" fontWeight="$normal">
            {topic?.description}
          </Text>
        </Box>

        <Box h={0.3} backgroundColor="black" mx={17}></Box>

        {topic?.videoLink && <VideoComponent r2Key={topic.videoLink} />}
        {topic?.studyMaterial && <StudyMaterial r2Key={topic.studyMaterial} />}
        {/* <SampleQuestions /> */}
        {(topic?.mcqQuestions?.length ?? 0) > 0 && (
          <McqTestCard topicId={topic?.id} />
        )}
      </Box>
    </ScrollView>
  );
};

export default CourseTopicView;
