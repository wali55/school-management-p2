import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudent = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Single Card */}
          <div className="flex-1 bg-sky-200 rounded-md px-4 py-6 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="size-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Catherine Amaya</h1>
              <p className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam.
              </p>
              <div className="flex flex-col gap-2 text-xs font-medium">
                <div className="flex items-center gap-2 w-full">
                  <Image src="/blood.png" alt="" width={12} height={12} />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image src="/date.png" alt="" width={12} height={12} />
                  <span>March 2025</span>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image src="/mail.png" alt="" width={12} height={12} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image src="/phone.png" alt="" width={12} height={12} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex justify-between flex-wrap gap-4">
            <div className="bg-white rounded-md w-full lg:w-[47%] flex gap-4 p-4 items-start">
                <Image src="/singleAttendance.png" alt="" height={20} width={20} />
                <div>
                    <h1 className="text-xl font-semibold">90%</h1>
                    <p className="text-xs text-gray-500">Attendance</p>
                </div>
            </div>
            <div className="bg-white rounded-md w-full lg:w-[47%] flex gap-4 p-4 items-start">
                <Image src="/singleBranch.png" alt="" height={20} width={20} />
                <div>
                    <h1 className="text-xl font-semibold">6th</h1>
                    <p className="text-xs text-gray-500">Grade</p>
                </div>
            </div>
            <div className="bg-white rounded-md w-full lg:w-[47%] flex gap-4 p-4 items-start">
                <Image src="/singleLesson.png" alt="" height={20} width={20} />
                <div>
                    <h1 className="text-xl font-semibold">18</h1>
                    <p className="text-xs text-gray-500">Lessons</p>
                </div>
            </div>
            <div className="bg-white rounded-md w-full lg:w-[47%] flex gap-4 p-4 items-start">
                <Image src="/singleClass.png" alt="" height={20} width={20} />
                <div>
                    <h1 className="text-xl font-semibold">6A</h1>
                    <p className="text-xs text-gray-500">Class</p>
                </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="bg-white rounded-md p-4 h-[800px]">
            <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
            <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4 flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="flex gap-2 text-xs flex-wrap">
                <Link href="/" className="p-2 rounded-md bg-sky-50">
                  <p>Student&apos;s Lessons</p>
                </Link>
                <Link href="/" className="p-2 rounded-md bg-pink-50">
                  <p>Student&apos;s Teachers</p>
                </Link>
                <Link href="/" className="p-2 rounded-md bg-purple-50">
                  <p>Student&apos;s Exams</p>
                </Link>
                <Link href="/" className="p-2 rounded-md bg-rose-50">
                  <p>Student&apos;s Assignments</p>
                </Link>
                <Link href="/" className="p-2 rounded-md bg-yellow-50">
                  <p>Student&apos;s Results</p>
                </Link>
            </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudent;
