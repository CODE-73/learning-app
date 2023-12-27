import { Box } from '@gluestack-ui/themed';
import { Slot, router } from 'expo-router';
import Topbar from '../../modules/common/Topbar';
import Sidebar from '../../modules/common/Sidebar';
import { useState } from 'react';
import { UserProvider } from '@learning-app/auth';

const MainLayout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  console.log(sidebarShown);
  return (
    <UserProvider onUnauthorized={() => router.replace('/login')}>
      <Box
        display="flex"
        flexDirection="column"
        h="$full"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Topbar onToggleSidebar={() => setSidebarShown((prev) => !prev)} />
        <Slot />
        <Sidebar
          isShown={sidebarShown}
          onToggleSidebar={() => setSidebarShown((prev) => !prev)}
        />
      </Box>
    </UserProvider>
  );
};

export default MainLayout;
