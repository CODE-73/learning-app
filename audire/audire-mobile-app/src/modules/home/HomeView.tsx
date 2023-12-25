import React from 'react';
import HomeFooterView from '../footer/HomeFooterView';
import StageCard from './stage-card/StageCard';
import { Box, Text, Image, View } from '@gluestack-ui/themed';
import { useCourses } from '@learning-app/syllabus';
import { Asset } from 'expo-asset';

const HomeView = () => {
  const TEMP_COURSE = 'CA';
  const { data: { data: courses } = { data: [] } } = useCourses();
  const image = Asset.fromURI('/assets/homepageBanner.jpg').uri;
  const colors = ['#D6A8D4', '#94B6BB', '#FBB6B1', '#FF33D1', '#33D1FF'];

  return (
    <Box flex={1} width="$full">
      <Text fontSize="$xl" color="black" fontWeight="$light" ml="$5" py="$5">
        Hey Jane!
      </Text>
      <Box bg="white" p="$1.5">
        <Image
          borderRadius={10}
          w="$full"
          size="2xl"
          alt="homepageBanner"
          source={{
            uri: image,
          }}
        />
      </Box>
      <Text fontSize="$xl" color="black" fontWeight="$medium" ml="$5" py="$5">
        Choose your stage
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        borderRadius="$2xl"
      >
        {(
          (courses ?? []).find((c) => c.title === TEMP_COURSE)?.stages ?? []
        ).map((stage, index) => (
          <View
            borderRadius="$lg"
            key={stage.id}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <StageCard
              stage={stage.title}
              href={`/course-stages/${stage.id}`}
            />
          </View>
        ))}
      </Box>
      <HomeFooterView />
    </Box>
  );
};

export default HomeView;
