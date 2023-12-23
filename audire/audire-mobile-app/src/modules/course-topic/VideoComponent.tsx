import React, { ComponentProps, FC } from 'react';
import { Box, Image } from '@gluestack-ui/themed';

import { Asset } from 'expo-asset';

type VideoComponentProps = ComponentProps<typeof Box>;

const VideoComponent: FC<VideoComponentProps> = (props) => {
  const PlayIcon = Asset.fromURI('/assets/courseSelectionPlayIcon.svg').uri;

  return (
    <Box
      mx={17}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#e5e5e5"
      borderRadius="$lg"
      h={200}
      my="$1"
      {...props}
    >
      <Box pr="$4">
        <Image
          alt="PlayIcon"
          size="xs"
          source={{
            uri: PlayIcon,
          }}
        />
      </Box>
    </Box>
  );
};
export default VideoComponent;
