import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
import { Slot } from 'expo-router';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';

const topBar = () => {
  const image = Asset.fromURI('/assets/audire.png').uri;
  return (
    <Box
      bg="#f5d0fe"
      sx={{
        // Use flex to make the Box fill the entire screen
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // 100% of the viewport height
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally

        // Other styles if needed
        // '@sm': { m: '$1' },
        // '@lg': { m: '$1' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          alignItems: 'center',
        }}
      >
        <Icon as={Menu} size="xl" sx={{ marginRight: 66 }} />

        <Box>
          <Image
            size="xl"
            alt="Audire Logo"
            source={{
              uri: image,
            }}
          />
        </Box>

        <Avatar
          bgColor="$amber600"
          size="md"
          borderRadius="$full"
          sx={{ marginLeft: 66 }}
        >
          <AvatarFallbackText>Mohammed Sameer</AvatarFallbackText>
        </Avatar>
      </Box>
      <Slot />
    </Box>
  );
};

export default topBar;
