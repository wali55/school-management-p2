import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  { label: "Subject Name", accessor: "subject" },
  {
    label: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    label: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    label: "Actions",
    accessor: "actions"
  }
];

const AllLessons = () => {
  const renderedRow = (item: Lesson) => {
    return (
      <tr
        key={item.id}
        className="border-b border-b-gray-200 even:bg-gray-50 text-sm hover:bg-purple-50"
      >
        <td className="p-4">{item.subject}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <button className="flex items-center justify-center bg-sky-200 size-7 rounded-full">
                  <Image src="/edit.png" alt="" width={14} height={14} />
                </button>
                <FormModal table="lesson" type="delete" id={item.id} />
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
        <h1 className="hidden lg:block text-xl font-semibold">All Lessons</h1>
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
        data={lessonsData}
      />
      <Pagination />
    </div>
  );
};

export default AllLessons;
