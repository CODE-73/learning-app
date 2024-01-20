import { UserProvider } from '@learning-app/auth';
import { router } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useState } from 'react';
import Topbar from '../../modules/common/Topbar';
import Sidebar from '../../modules/common/sidebar/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <UserProvider onUnauthorized={() => router.replace('/login')}>
      <Topbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} />

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <Stack
        initialRouteName='/'
        screenOptions={{
          header: () => null
        }}
      />
    </UserProvider>
  );

}

export default MainLayout;
