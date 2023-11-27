import CourseSelectionView from './CourseSelectionView';
import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';
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
          // Use flex to make the Box fill the entire screen
          display: 'flex',
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Image
            size="xl"
            alt="Audire Logo"
            source={{
              uri: image,
            }}
          />
        </Box>

        <Avatar bgColor="$amber600" size="md" borderRadius="$full">
          <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
        </Avatar>
      </Box>
      <CourseSelectionView />

      <Icon as={Menu} m="$2" w="$4" h="$4" />
    </Box>
  );
};

export default topBar;
