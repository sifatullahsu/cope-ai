import LeftSideBar from "@/components/LeftSideBar";
import RightSidebar from "@/components/RightSidebar";
import { IChildren } from "@/types";

const DashboardLayout = ({ children }: IChildren) => {
  return (
    <div className="container">
      <h3>Dashboard Layout</h3>
      <div className="grid grid-cols-4 gap-[60px] border border-[#414141] rounded-[32px]">
        <div>
          <LeftSideBar />
        </div>
        <div className="col-span-2 border border-[#414141]">{children}</div>
        <div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
