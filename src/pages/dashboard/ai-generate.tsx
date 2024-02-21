import ArticleGrid from '@/components/ArticleGrid'
import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useGetContentsQuery } from '@/redux/api/contentsApi'
import { NextLayout, TContent } from '@/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import articleIcon from '../../assets/icons/article.svg'
import copyIcon from '../../assets/icons/copy.svg'
import imageIcon from '../../assets/icons/image.svg'

const AiGenerate: NextLayout = () => {
  const { data: session } = useSession()
  const [types, setTypes] = useState<'article' | 'image' | 'copy'>('article')
  const { data, isLoading } = useGetContentsQuery(
    {
      query: `status=success&type=${types}&user=${session?.user._id}`
    },
    { refetchOnMountOrArgChange: true }
  )

  if (isLoading) return <div>Loading</div>

  console.log(data)

  return (
    <div>
      <DashTitle title="Ai generate" />

      <div
        style={{ backgroundColor: 'rgba(229, 232, 255, 0.08)' }}
        className="rounded-xl grid grid-cols-3 py-[18px] [&>div]:font-medium [&>div]:flex [&>div]:justify-center [&>div]:gap-2 [&>div]:hover:cursor-pointer [&>div.active]:text-textSecondary"
      >
        <div className={`${types === 'article' ? 'active' : ''}`} onClick={() => setTypes('article')}>
          <Image src={articleIcon} alt="" /> Article
        </div>
        <div className={`${types === 'image' ? 'active' : ''}`} onClick={() => setTypes('image')}>
          <Image src={imageIcon} alt="" /> Image
        </div>
        <div>
          <Image src={copyIcon} alt="" /> Copy
        </div>
      </div>

      <div>
        {data.data.map((i: TContent) => (
          <ArticleGrid key={i._id} title={i.title} description={i.description} src={i.image} />
        ))}
        {!data.data.length && <div>The content data not found for this user.</div>}
      </div>
    </div>
  )
}

export default AiGenerate

AiGenerate.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
