import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-4 flex lg:justify-between items-center justify-end">
      <div className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-full px-4">
        <Image src="/search.png" alt="" width={12} height={12} />
        <input type="text" className="p-2 bg-transparent outline-none text-sm" />
      </div>
      <div className="flex items-center gap-8">
        <div className="bg-white size-7 rounded-full flex items-center justify-center">
          <Image src="/message.png" alt="" height={18} width={18} />
        </div>
        <div className="bg-white size-7 rounded-full flex items-center justify-center relative">
          <Image src="/announcement.png" alt="" height={18} width={18} />
          <div className="absolute size-4 rounded-full bg-purple-500 flex items-center justify-center -top-2 -right-2">
            <p className="text-xs text-white">1</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold">John Doe</h3>
          <p className="text-[10px] text-gray-500 self-end">Admin</p>
        </div>
        <div className="rounded-full size-9">
          <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
