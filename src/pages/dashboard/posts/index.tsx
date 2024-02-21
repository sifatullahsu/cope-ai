import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'

const PostsPage: NextLayout = () => {
  return (
    <div>
      <DashTitle title="Posts" />
    </div>
  )
}

export default PostsPage

PostsPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
