import Image from "next/image";

const UserCard = ({ label, count }: { label: string; count: number }) => {
  return (
    <div className="odd:bg-purple-200 even:bg-yellow-200 flex flex-col gap-4 flex-1 p-4 rounded-2xl min-w-[150px]">
      <div className="flex justify-between items-center">
        <div className="bg-white px-2 py-1 rounded-full">
          <p className="text-xs text-green-500">3/4/2025</p>
        </div>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-xl font-semibold">{count}</h1>
      <p className="text-sm text-gray-500 capitalize">{label}</p>
    </div>
  );
};

export default UserCard;
