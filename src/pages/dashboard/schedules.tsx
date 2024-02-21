import ArticleGrid from '@/components/ArticleGrid'
import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useGetContentsQuery } from '@/redux/api/contentsApi'
import { NextLayout, TContent } from '@/types'
import { useSession } from 'next-auth/react'

const SchedulesPage: NextLayout = () => {
  const { data: session } = useSession()
  const { data, isLoading } = useGetContentsQuery({ query: `status=scheduled&user=${session?.user._id}` })

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <DashTitle title="Schedules" />
      <div>
        {data.data.map((i: TContent) => (
          <ArticleGrid key={i._id} title={i.title} description={i.description} src={i.image} />
        ))}
        {!data.data.length && <div>The content data not found for this user.</div>}
      </div>
    </div>
  )
}

export default SchedulesPage

SchedulesPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
