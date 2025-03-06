import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white w-full rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2 p-4 bg-blue-50 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Lorem ipsum dolor</h1>
            <div className="bg-white rounded-md px-2 py-1">
              <p className="text-xs text-gray-400">2025-03-06</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium?
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-purple-50 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Lorem ipsum dolor</h1>
            <div className="bg-white rounded-md px-2 py-1">
              <p className="text-xs text-gray-400">2025-03-06</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium?
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-yellow-50 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Lorem ipsum dolor</h1>
            <div className="bg-white rounded-md px-2 py-1">
              <p className="text-xs text-gray-400">2025-03-06</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
