import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { Animated } from 'react-native';

type AuthorizationLayoutProps = {
  children: ReactNode;
};

const AuthorizationLayout: FC<AuthorizationLayoutProps> = ({ children }) => {
  const image = Asset.fromURI('/assets/loginBackroudImage.svg').uri;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="flex-end"
      h="$full"
    >
      {children}
      <Box position="absolute" zIndex={-1}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            alt="loginBackroudImage"
            size="2xl"
            source={{
              uri: image,
            }}
          />
        </Animated.View>
      </Box>
    </Box>
  );
};

export default AuthorizationLayout;
