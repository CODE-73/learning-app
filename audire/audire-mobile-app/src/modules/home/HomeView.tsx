import React from 'react';
import HomeFooterView from '../footer/HomeFooterView';
import StageCard from './stage-card/StageCard';
import { Box } from '@gluestack-ui/themed';

const stages = [
  { name: 'Foundation', link: '/course-stages/foundation' },
  { name: 'Intermediate', link: '/course-stages/intermediate' },
  { name: 'Final', link: '/course-stages/final' },
];

const HomeView = () => {
  return (
    <Box
      borderTopRightRadius="$2xl"
      borderTopLeftRadius="$2xl"
      flex={1}
      bgColor="white"
      width="$full"
      // Android
      elevation="$1.5"
      // iOS
      shadowColor="black"
      shadowOpacity="$40"
      shadowRadius="$8"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
    >
      {stages.map((stage) => (
        <StageCard key={stage.name} stage={stage.name} href={stage.link} />
      ))}
      <HomeFooterView />
    </Box>
  );
};

export default HomeView;
