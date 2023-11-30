import { FC, ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => (
  // TODO: Add Sidebar & Header
  <div className="h-screen bg-background text-white flex flex-row">
    {children}
    <Navbar />
    <Sidebar />
  </div>
);

export default AuthorizedLayout;
