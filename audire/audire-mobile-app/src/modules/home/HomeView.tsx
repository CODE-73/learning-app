import React from 'react';
import { View } from 'react-native';
import StageCard from './stage-card/StageCard';

const stages = [
  { name: 'Foundation', link: '/course-stages/foundation' },
  { name: 'Intermediate', link: '/course-stages/intermediate' },
  { name: 'Final', link: '/course-stages/final' },
];

const HomeView = () => {
  return (
    <View>
      {stages.map((stage) => (
        <StageCard key={stage.name} stage={stage.name} href={stage.link} />
      ))}
    </View>
  );
};

export default HomeView;
