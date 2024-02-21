import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const AnalyticsPage: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Analytics" />
    </div>
  )
}

export default AnalyticsPage

AnalyticsPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
