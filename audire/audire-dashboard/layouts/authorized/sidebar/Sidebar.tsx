import React, { useState } from 'react';
import Image from 'next/image';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="sidebar-root">
      <div
        className={`${
          isSidebarOpen ? 'flex' : 'hidden'
        } md:flex top-0 left-0 h-full bg-white p-4 flex flex-col items-center border-r-4`}
        onClick={handleButtonClick}
      >
        <Image
          src="/images/audire.png"
          alt="Logo"
          width={154}
          height={64}
          className="object-contain mb-4"
        />

        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
