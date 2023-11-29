import { FC, ReactNode } from 'react';

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => (
  <div className="h-screen bg-background text-white flex flex-row items-center justify-center">
    {children}
  </div>
);

export default PublicLayout;
