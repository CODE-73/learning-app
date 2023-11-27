import { Box } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import Topbar from '../../modules/common/Topbar';

const MainLayout = () => {
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
      <Topbar />
      <Slot />
    </Box>
  );
};

export default MainLayout;
