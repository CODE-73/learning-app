import React, { useState } from 'react';
import { Avatar, Card, Button } from '@nextui-org/react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import { useLogout } from '@learning-app/auth';

const Navbar = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const { trigger } = useLogout();

  const handleAvatarClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  const onLogout = async () => {
    try {
      await trigger();
      console.error('Logged out');
    } catch (e) {
      console.error('Error triggering on log in:', e);
    }
  };

  return (
    <div className="navbar-root bg-white p-4 flex items-center  border-b-4  ">
      <div className="md:hidden text-2xl  top-8  ">
        <GiHamburgerMenu color="black" />
      </div>
      <div className="flex gap-4 items-center justify-between ">
        <div className="object-contain mb-4  text-2xl top-8 ">
          <Image src="/images/logo.png" alt="Logo" width={54} height={44} />
        </div>
        <div className="relative ">
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
            <Button onClick={() => onLogout()}>Log Out</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Navbar;
