import LeftSideBar from '@/components/LeftSideBar'
import RightSidebar from '@/components/RightSidebar'
import { TChildren } from '@/types'

const DashboardLayout = ({ children }: TChildren) => {
  return (
    <div className="container p-5">
      <div className="grid grid-cols-4 border border-[#414141] rounded-[32px]">
        <div>
          <LeftSideBar />
        </div>
        <div className="col-span-2 border-x border-[#414141] px-[60px] pt-[50px] pb-10 ">{children}</div>
        <div>
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
