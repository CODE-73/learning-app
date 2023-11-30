import Image from 'next/image';
import SidebarItem from '../sidebar/SidebarItem';
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-white p-4 flex flex-col items-center border-r-4">
      <Image
        src="/images/audire.png"
        alt="Logo"
        width={154}
        height={64}
        className="object-contain mb-4"
      />

      <SidebarItem />
    </div>
  );
};

export default Sidebar;
