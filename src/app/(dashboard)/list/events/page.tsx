import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
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
    label: "Start Time",
    accessor: "startTime",
    className: "hidden lg:table-cell",
  },
  {
    label: "End Time",
    accessor: "endTime",
    className: "hidden lg:table-cell",
  },
  {
    label: "Actions",
    accessor: "actions"
  }
];

const AllEvents = () => {
  const renderedRow = (item: Event) => {
    return (
      <tr
        key={item.id}
        className="border-b border-b-gray-200 even:bg-gray-50 text-sm hover:bg-purple-50"
      >
        <td className="p-4">{item.title}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td className="hidden lg:table-cell">{item.startTime}</td>
        <td className="hidden lg:table-cell">{item.endTime}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <button className="flex items-center justify-center bg-sky-200 size-7 rounded-full">
                  <Image src="/edit.png" alt="" width={14} height={14} />
                </button>
                <FormModal table="event" type="delete" id={item.id} />
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
        <h1 className="hidden lg:block text-xl font-semibold">All Events</h1>
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
        data={eventsData}
      />
      <Pagination />
    </div>
  );
};

export default AllEvents;
