import Image, { StaticImageData } from 'next/image'

type TProps = { title: string; description: string; src: string | StaticImageData }

const ArticleGrid = ({ title, description, src }: TProps) => {
  return (
    <div>
      <h2 className="text-[40px] font-medium mt-[42px] mb-5 text-textSecondary">{title}</h2>
      <p className="text-sm font-medium mb-[30px]">{description}</p>
      <Image
        src={src}
        alt={title}
        width={0}
        height={0}
        className="rounded-[20px]"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default ArticleGrid
