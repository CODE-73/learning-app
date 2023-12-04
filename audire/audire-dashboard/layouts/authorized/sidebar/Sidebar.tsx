import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the hamburger menu icon
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleButtonClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="sidebar-root relative">
      <div className="md:hidden text-2xl relative top-8 right-8 ">
        <GiHamburgerMenu color="black" onClick={handleHamburgerClick} />
      </div>

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
