import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const SettingsPage: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Settings" />
    </div>
  )
}

export default SettingsPage

SettingsPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
