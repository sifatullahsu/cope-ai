import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const DashboardPage: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Dashboard" />
    </div>
  )
}

export default DashboardPage

DashboardPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
