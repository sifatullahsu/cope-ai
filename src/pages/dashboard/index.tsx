import DashboardLayout from "@/layouts/DashboardLayout";
import { NextLayout } from "@/types";

const DashboardPage: NextLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
