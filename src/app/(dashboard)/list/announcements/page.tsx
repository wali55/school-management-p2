import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import TableSearch from "@/components/TableSearch";
import { announcementsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  { label: "Title", accessor: "title" },
  {
    label: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    label: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    label: "Actions",
    accessor: "actions"
  }
];

const AllAnnouncements = () => {
  const renderedRow = (item: Announcement) => {
    return (
      <tr
        key={item.id}
        className="border-b border-b-gray-200 even:bg-gray-50 text-sm hover:bg-purple-50"
      >
        <td className="p-4">{item.title}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <button className="flex items-center justify-center bg-sky-200 size-7 rounded-full">
                  <Image src="/edit.png" alt="" width={14} height={14} />
                </button>
                <button className="flex items-center justify-center bg-[#CFCEFC] size-7 rounded-full">
                  <Image src="/delete.png" alt="" width={14} height={14} />
                </button>
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="m-4 p-4 bg-white rounded-md flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="hidden lg:block text-xl font-semibold">All Announcements</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-fit items-center">
          <TableSearch />
          <div className="self-end flex gap-4">
            <Link
              href="/"
              className="bg-yellow-300 rounded-full size-8 flex justify-center items-center"
            >
              <Image src="/filter.png" alt="" width={16} height={16} />
            </Link>
            <Link
              href="/"
              className="bg-yellow-300 rounded-full size-8 flex justify-center items-center"
            >
              <Image src="/sort.png" alt="" width={16} height={16} />
            </Link>
            <Link
              href="/"
              className="bg-yellow-300 rounded-full size-8 flex justify-center items-center"
            >
              <Image src="/plus.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
      <TableList
        columns={columns}
        renderedRow={renderedRow}
        data={announcementsData}
      />
      <Pagination />
    </div>
  );
};

export default AllAnnouncements;
