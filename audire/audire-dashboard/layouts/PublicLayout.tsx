import { FC, ReactNode } from 'react';

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => (
  <div className="h-screen bg-background text-white flex flex-row">
    {children}
  </div>
);

export default PublicLayout;
