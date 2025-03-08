import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  { label: "Info", accessor: "info" },
  {
    label: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    label: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  { label: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { label: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { label: "Actions", accessor: "actions" },
];

const AllStudents = () => {
  const renderedRow = (item: Student) => {
    return (
      <tr
        key={item.id}
        className="border-b border-b-gray-200 even:bg-gray-50 text-sm hover:bg-purple-50"
      >
        <td className="flex gap-2 items-center p-4">
          <Image
            src={item.photo}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.class}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/students/${item.id}`}>
              <button className="flex items-center justify-center bg-sky-200 size-7 rounded-full">
                <Image src="/view.png" alt="" width={14} height={14} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="flex items-center justify-center bg-[#CFCEFC] size-7 rounded-full">
                <Image src="/delete.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="m-4 p-4 bg-white rounded-md flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="hidden lg:block text-xl font-semibold">All Students</h1>
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
        data={studentsData}
      />
      <Pagination />
    </div>
  );
};

export default AllStudents;
