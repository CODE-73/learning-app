import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Box } from '@gluestack-ui/themed';
import { Animated } from 'react-native';
import LoginBackgroundImage from '/assets/loginBackroudImage.svg';

type AuthorizationLayoutProps = {
  children: ReactNode;
};

const AuthorizationLayout: FC<AuthorizationLayoutProps> = ({ children }) => {
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
      <Box position="absolute" zIndex={2} $xl-maxWidth="$1/4">
        <Animated.View style={{ opacity: fadeAnim}}>
        <LoginBackgroundImage />
                 </Animated.View>
      </Box>
    </Box>
  );
};

export default AuthorizationLayout;
