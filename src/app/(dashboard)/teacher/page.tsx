import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

const TeacherDashboard = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-4">
      <div className="w-full xl:w-2/3">
        <div className="p-4 bg-white rounded-md h-[800px]">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherDashboard;
