import { UserProvider } from '@learning-app/auth';
import { router, useSegments } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useState } from 'react';
import Topbar from '../../modules/common/Topbar';
import Sidebar from '../../modules/common/sidebar/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const segments = useSegments();
  console.log('aaaa', segments);
  const hideTopbarSegments = ['(auth)/mcq-exams/[topic]'];

  const hideTopbar = hideTopbarSegments.indexOf(segments.join('/')) >= 0;
  console.log({ segments, hideTopbarSegments, hideTopbar });

  return (
    <UserProvider onUnauthorized={() => router.replace('/login')}>
      {!hideTopbar && (
        <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      )}

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <Stack
        initialRouteName="/"
        screenOptions={{
          header: () => null,
        }}
      />
    </UserProvider>
  );
};

export default MainLayout;
