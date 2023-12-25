import React, { ComponentProps, FC, useEffect, useRef } from 'react';
import { Box, Image } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import Video, { VideoRef } from 'react-native-video';

type VideoComponentProps = ComponentProps<typeof Box>;

const VideoComponent: FC<VideoComponentProps> = (props) => {
  const PlayIcon = Asset.fromURI('/assets/courseSelectionPlayIcon.svg').uri;
  const videoRef = useRef<VideoRef>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.resume();
  }, [videoRef]);

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
      <Box width="$full" height="$32" position="relative">
        <Video
          ref={videoRef}
          controls={true}
          source={{
            uri: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
            // uri: 'https://pub-3fe5f60b517c4b64841ac747be486004.r2.dev/test1/v1080p/test-absolute.m3u8',
            // uri: 'https://file-examples.com/storage/feaef18a3c6587263a0ed0e/2017/04/file_example_MP4_1920_18MG.mp4',
          }}
          debug={{
            enable: true,
            thread: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoComponent;
