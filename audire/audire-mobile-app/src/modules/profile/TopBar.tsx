import CourseSelectionView from './CourseSelectionView';
import { Image, Box } from '@gluestack-ui/themed';
import { Asset } from 'expo-asset';

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
      <Image
        size="xl"
        alt="Audire Logo"
        source={{
          uri: image,
        }}
      />
      <CourseSelectionView />
    </Box>
  );
};

export default topBar;
