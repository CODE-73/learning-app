import { Box } from '@gluestack-ui/themed';
import { useR2Download } from '@learning-app/r2';
import {
  ResizeMode,
  Video,
  VideoFullscreenUpdate,
  VideoFullscreenUpdateEvent,
} from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { ComponentProps, FC, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

type VideoComponentProps = ComponentProps<typeof Box> & {
  r2Key: string;
};

const VideoComponent: FC<VideoComponentProps> = (props) => {
  const videoRef = useRef<Video>(null);
  const [url, setUrl] = useState<string | null>(null);
  const { trigger: getURL } = useR2Download();

  useEffect(() => {
    getURL({
      key: props.r2Key,
    }).then(({ url }) => setUrl(url));
  }, [getURL, props.r2Key]);

  const onFullscreenUpdate = async ({
    fullscreenUpdate,
  }: VideoFullscreenUpdateEvent) => {
    if (Platform.OS !== 'android') {
      // only on Android required
      // https://github.com/expo/expo/issues/6864
      return;
    }
    switch (fullscreenUpdate) {
      case VideoFullscreenUpdate.PLAYER_DID_PRESENT:
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
        );
        break;
      case VideoFullscreenUpdate.PLAYER_WILL_DISMISS:
        await ScreenOrientation.unlockAsync();
        break;
    }
  };

  return (
    <Box
      width="$full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#e5e5e5"
      borderRadius="$lg"
      h="$56"
      my="$1"
      position="relative"
      {...props}
    >
      {url && (
        <Video
          ref={videoRef}
          useNativeControls
          shouldPlay
          volume={1}
          resizeMode={ResizeMode.CONTAIN}
          onFullscreenUpdate={onFullscreenUpdate}
          source={{
            uri: url,
            // uri: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
            // uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            // uri: 'https://pub-3fe5f60b517c4b64841ac747be486004.r2.dev/test1/v1080p/test-absolute.m3u8',
            // uri: 'https://file-examples.com/storage/feaef18a3c6587263a0ed0e/2017/04/file_example_MP4_1920_18MG.mp4',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </Box>
  );
};

export default VideoComponent;
