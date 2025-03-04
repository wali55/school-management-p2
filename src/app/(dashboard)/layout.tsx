import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        <div className="w-[8%] lg:w-[18%]">
            <Menu />
        </div>
        <div className="w-[92%] lg:w-[82%] bg-gray-100">
            <Navbar />
            <div>{children}</div>
        </div>
      </div>
    );
  }