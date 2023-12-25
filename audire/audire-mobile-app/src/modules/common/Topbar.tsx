import { Box, Image, Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

import { FC } from 'react';
import { Pressable } from 'react-native';

type TopbarProps = {
  onToggleSidebar: () => void;
};

const Topbar: FC<TopbarProps> = ({ onToggleSidebar }) => {
  const image = Asset.fromURI('/assets/notificationIcon.svg').uri;

  return (
    <Box
      w="$full"
      p="$6"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Pressable onPress={onToggleSidebar}>
          <Avatar bgColor="#B051AE" size="md" borderRadius="$full">
            <AvatarFallbackText fontWeight="bold" color="black">
              Mohammed Sameer
            </AvatarFallbackText>
          </Avatar>
        </Pressable>
      </Box>
      <Box>
        <Image
          size="xs"
          alt="notificationIcon"
          source={{
            uri: image,
          }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
