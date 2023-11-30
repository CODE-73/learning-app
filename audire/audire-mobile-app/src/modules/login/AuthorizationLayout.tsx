import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { FC, ReactNode } from 'react';

type AuthorizationLayoutProps = {
  children: ReactNode;
};

const AuthorizationLayout: FC<AuthorizationLayoutProps> = ({ children }) => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <Box
      bg="$fuchsia200"
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center the content vertically
      alignItems="center" // Center the content horizontally
      h="$full"
    >
      <Image
        size="2xl"
        alt="Audire Logo"
        mt={30}
        mb={30}
        source={{
          uri: image,
        }}
      />
      {children}
    </Box>
  );
};

export default AuthorizationLayout;
