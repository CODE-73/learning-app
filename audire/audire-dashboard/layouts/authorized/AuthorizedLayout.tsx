import { FC, ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => (
  <div className="h-screen w-screen bg-background flex flex-col">
    <Navbar />
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  </div>
);

export default AuthorizedLayout;
