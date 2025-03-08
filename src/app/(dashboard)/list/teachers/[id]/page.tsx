import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* Top */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Big Card  */}
          <div className="flex-1 bg-sky-200 rounded-md flex p-4 gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="size-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-2">
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate!
              </p>
              <div className="text-xs flex flex-col gap-1">
                <div className="flex gap-2 items-center w-full font-semibold">
                  <Image src="/blood.png" alt="" width={12} height={12} />
                  <span>A+</span>
                </div>
                <div className="flex gap-2 items-center w-full font-semibold">
                  <Image src="/date.png" alt="" width={12} height={12} />
                  <span>January 2025</span>
                </div>
                <div className="flex gap-2 items-center w-full font-semibold">
                  <Image src="/mail.png" alt="" width={12} height={12} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex gap-2 items-center w-full font-semibold">
                  <Image src="/phone.png" alt="" width={12} height={12} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex flex-wrap gap-4 justify-between">
            <div className="bg-white rounded-md p-4 flex gap-4 items-start w-full md:w-[47%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                height={20}
                width={20}
              />
              <div>
                <h1 className="font-semibold">90%</h1>
                <p className="text-xs text-gray-500">Attendance</p>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 flex gap-2 items-start w-full md:w-[47%]">
              <Image
                src="/singleBranch.png"
                alt=""
                height={20}
                width={20}
              />
              <div>
                <h1 className="font-semibold">2</h1>
                <p className="text-xs text-gray-500">Branches</p>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 flex gap-2 items-start w-full md:w-[47%]">
              <Image
                src="/singleLesson.png"
                alt=""
                height={20}
                width={20}
              />
              <div>
                <h1 className="font-semibold">6</h1>
                <p className="text-xs text-gray-500">Lessons</p>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 flex gap-2 items-start w-full md:w-[47%]">
              <Image
                src="/singleClass.png"
                alt=""
                height={20}
                width={20}
              />
              <div>
                <h1 className="font-semibold">6</h1>
                <p className="text-xs text-gray-500">Classes</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="bg-white rounded-md p-4 h-[800px]">
            <h1 className="text-xl font-semibold">Teacher&apos;s Schedule</h1>
            <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="p-2 rounded-md bg-sky-50 text-xs">
                <span>Teacher&apos;s Classes</span>
              </Link>
              <Link href="/" className="p-2 rounded-md bg-purple-50 text-xs">
                <span>Teacher&apos;s Students</span>
              </Link>
              <Link href="/" className="p-2 rounded-md bg-pink-50 text-xs">
                <span>Teacher&apos;s Lessons</span>
              </Link>
              <Link href="/" className="p-2 rounded-md bg-yellow-50 text-xs">
                <span>Teacher&apos;s Exams</span>
              </Link>
              <Link href="/" className="p-2 rounded-md bg-sky-50 text-xs">
                <span>Teacher&apos;s Assignments</span>
              </Link>
            </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
