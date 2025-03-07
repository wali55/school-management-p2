import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

const ParentDashboard = () => {
    return (
        <div className="flex flex-col xl:flex-row p-4 gap-4">
            <div className="w-full xl:w-2/3 bg-white rounded-md p-4 h-[800px]">
              <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
              <BigCalendar />
            </div>
            <div className="w-full xl:w-1/3">
              <Announcement />
            </div>
        </div>
    )
}

export default ParentDashboard;