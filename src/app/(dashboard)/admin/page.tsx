import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="flex justify-between gap-2 flex-wrap">
          <UserCard label="student" count={2000} />
          <UserCard label="teacher" count={50} />
          <UserCard label="parent" count={4000} />
          <UserCard label="staff" count={70} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <CountChart />
          </div>
          <div className="w-full md:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        <FinanceChart />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminDashboard;
