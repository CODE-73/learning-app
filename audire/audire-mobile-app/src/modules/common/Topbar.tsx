import { Box, Image, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

import { FC } from 'react';

type TopbarProps = {
  onToggleSidebar: () => void;
};

const Topbar: FC<TopbarProps> = ({ onToggleSidebar }) => {
  const image = Asset.fromURI('/assets/notificationIcon.svg').uri;

  return (
    <Box
      w="$full"
      p="$8"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Avatar bgColor="#B051AE" size="md" borderRadius="$full">
          <AvatarFallbackText fontWeight="bold" color="black">
            Mohammed Sameer
          </AvatarFallbackText>
        </Avatar>
      </Box>
      <Box>
        <Image
          size="xs"
          alt="Audire Logo"
          source={{
            uri: image,
          }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
