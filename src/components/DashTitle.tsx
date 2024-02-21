type TProps = { title: string }

const DashTitle = ({ title }: TProps) => {
  return <h2 className="text-textSecondary font-semibold text-2xl mb-8">{title}</h2>
}

export default DashTitle
