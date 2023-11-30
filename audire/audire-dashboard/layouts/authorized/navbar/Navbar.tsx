import React, { useState } from 'react';
import { Avatar, Card, Button } from '@nextui-org/react';
import { IoIosArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b-4 ">
      <div></div>

      <div className="flex gap-4 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="User Name"
            disabled
            className="mt-2 pl-8 pr-1 py-1 bg-white border border-slate-400 rounded-md text-lg text-black shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <IoIosArrowDropdown
            className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
            color="black"
          />
        </div>

        <Avatar
          onClick={handleAvatarClick}
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />

        {isCardOpen && (
          <Card>
            <Button onClick={handleLogout}>Log Out</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Navbar;
