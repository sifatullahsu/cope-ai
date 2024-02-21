import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const CreatePost: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Create Post" />
    </div>
  )
}

export default CreatePost

CreatePost.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
