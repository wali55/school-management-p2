import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import TableSearch from "@/components/TableSearch";
import { parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
};

const columns = [
  { label: "Info", accessor: "info" },
  {
    label: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  { label: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { label: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { label: "Actions", accessor: "actions" },
];

const AllParents = () => {
  const renderedRow = (item: Parent) => {
    return (
      <tr
        key={item.id}
        className="border-b border-b-gray-200 even:bg-gray-50 text-sm hover:bg-purple-50"
      >
        <td className="p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.email}</p>
        </td>
        <td className="hidden md:table-cell">{item.students.join(",")}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
            <button className="flex items-center justify-center bg-sky-200 size-7 rounded-full">
              <Image src="/view.png" alt="" width={14} height={14} />
            </button>
            </Link>
            <button className="flex items-center justify-center bg-[#CFCEFC] size-7 rounded-full">
              <Image src="/delete.png" alt="" width={14} height={14} />
            </button>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="m-4 p-4 bg-white rounded-md flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="hidden lg:block text-xl font-semibold">All Parents</h1>
        <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-fit items-center">
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
        data={parentsData}
      />
      <Pagination />
    </div>
  );
};

export default AllParents;
