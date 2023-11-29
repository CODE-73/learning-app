import { FC, ReactNode } from 'react';

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => (
  // TODO: Add Sidebar & Header
  <div className="h-screen bg-background text-white flex flex-row">
    {children}
  </div>
);

export default AuthorizedLayout;
