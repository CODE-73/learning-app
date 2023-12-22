import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { FC, ReactNode } from 'react';

type AuthorizationLayoutProps = {
  children: ReactNode;
};

const AuthorizationLayout: FC<AuthorizationLayoutProps> = ({ children }) => {
  const image = Asset.fromURI('/assets/loginBackroudImage.svg').uri;
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
        <Image
          alt="loginBackroudImage"
          size="2xl"
          source={{
            uri: image,
          }}
        />
      </Box>
    </Box>
  );
};

export default AuthorizationLayout;
