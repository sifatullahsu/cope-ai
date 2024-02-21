import ArticleGrid from '@/components/ArticleGrid'
import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { NextLayout } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import demoImage from '../../assets/article.jpeg'
import articleIcon from '../../assets/icons/article.svg'
import copyIcon from '../../assets/icons/copy.svg'
import imageIcon from '../../assets/icons/image.svg'

const AiGenerate: NextLayout = () => {
  const [types, setTypes] = useState<'article' | 'image' | 'copy'>('article')

  return (
    <div>
      <DashTitle title="Ai generate" />

      <div
        style={{ backgroundColor: 'rgba(229, 232, 255, 0.08)' }}
        className="rounded-xl grid grid-cols-3 py-[18px] [&>div]:font-medium [&>div]:flex [&>div]:justify-center [&>div]:gap-2 [&>div]:hover:cursor-pointer [&>div.active]:text-textSecondary"
      >
        <div className="active">
          <Image src={articleIcon} alt="" /> Article
        </div>
        <div>
          <Image src={imageIcon} alt="" /> Image
        </div>
        <div>
          <Image src={copyIcon} alt="" /> Copy
        </div>
      </div>

      <div>
        <ArticleGrid
          title="The Potential of AI Power"
          description="We are on a mission to revolutionize the way businesses leverage artificial intelligence. With a team of dedicated experts and a commitment to innovation, we strive to make AI accessibles"
          src={demoImage}
        />
        <ArticleGrid
          title="The Potential of AI Power"
          description="We are on a mission to revolutionize the way businesses leverage artificial intelligence. With a team of dedicated experts and a commitment to innovation, we strive to make AI accessibles"
          src={demoImage}
        />
        <ArticleGrid
          title="The Potential of AI Power"
          description="We are on a mission to revolutionize the way businesses leverage artificial intelligence. With a team of dedicated experts and a commitment to innovation, we strive to make AI accessibles"
          src={demoImage}
        />
      </div>
    </div>
  )
}

export default AiGenerate

AiGenerate.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
