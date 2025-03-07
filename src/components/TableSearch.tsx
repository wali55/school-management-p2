import Image from "next/image";

const TableSearch = () => {
    return (
        <div className="min-w-[300px] w-full flex items-center gap-2 px-2 border border-gray-300 rounded-full">
            <Image src="/search.png" alt="" width={12} height={12} />
            <input type="text" placeholder="Search..." className="w-full p-2 text-sm bg-transparent outline-none" />
        </div>
    )
}

export default TableSearch;