import { FC, ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import { UserProvider } from '@learning-app/auth';
import { useRouter } from 'next/router';

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-background flex flex-col">
      <UserProvider onUnauthorized={() => router.replace('/login')}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </UserProvider>
    </div>
  );
};

export default AuthorizedLayout;
