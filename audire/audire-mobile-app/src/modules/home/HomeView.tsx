import React from 'react';

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
      sx={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: '$3xl',
        borderTopRightRadius: '$3xl',
        // Android
        elevation: 5,
        // iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      }}
    >
      {stages.map((stage) => (
        <StageCard key={stage.name} stage={stage.name} href={stage.link} />
      ))}
    </Box>
  );
};

export default HomeView;
