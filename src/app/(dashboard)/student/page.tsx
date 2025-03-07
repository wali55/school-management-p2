import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentDashboard = () => {
    return (
        <div className="flex flex-col xl:flex-row p-4 gap-4">
            <div className="w-full xl:w-2/3 bg-white rounded-md p-4 h-[800px]">
              <h1 className="text-xl font-semibold">Schedule(4A)</h1>
              <BigCalendar />
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
              <EventCalendar/>
              <Announcement />
            </div>
        </div>
    )
}

export default StudentDashboard;