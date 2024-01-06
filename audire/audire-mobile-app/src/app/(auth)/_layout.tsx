import { UserProvider } from '@learning-app/auth';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import Topbar from '../../modules/common/Topbar';
import Sidebar from '../../modules/common/Sidebar';

const MainLayout = () => {
  return (
    <UserProvider onUnauthorized={() => router.replace('/login')}>
      <Drawer
        initialRouteName="index"
        backBehavior='history'
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          header: (props) => (
            <Topbar onToggleSidebar={() => props.navigation.toggleDrawer()} />
          ),
        }}
      ></Drawer>
    </UserProvider>
  );
};

export default MainLayout;
