import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const SchedulesPage: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Schedules" />
    </div>
  )
}

export default SchedulesPage

SchedulesPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
