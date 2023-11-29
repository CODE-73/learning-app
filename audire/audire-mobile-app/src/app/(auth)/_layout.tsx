import { Box } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import Topbar from '../../modules/common/Topbar';
import Sidebar from '../../modules/common/Sidebar';
import { useState } from 'react';

const MainLayout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  console.log(sidebarShown);
  return (
    <Box
      bg="#f5d0fe"
      sx={{
        // Use flex to make the Box fill the entire screen
        display: 'flex',
        flexDirection: 'column',
        height: '$full',
        justifyContent: 'flex-start', // Center the content vertically
        alignItems: 'center', // Center the content horizontally

        // Other styles if needed
        // '@sm': { m: '$1' },
        // '@lg': { m: '$1' },
      }}
    >
      <Topbar onToggleSidebar={() => setSidebarShown((prev) => !prev)} />
      <Slot />
      <Sidebar
        isShown={sidebarShown}
        onToggleSidebar={() => setSidebarShown((prev) => !prev)}
      />
    </Box>
  );
};

export default MainLayout;
