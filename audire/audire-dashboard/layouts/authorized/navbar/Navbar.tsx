import Image from 'next/image';
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b-4 ">
      <Image
        src="/images/audire.png"
        alt="Logo"
        width={64}
        height={64}
        className="object-contain mb-4"
      />

      <div className="flex gap-4 items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Navbar;
