import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useCreateContentMutation } from '@/redux/api/contentsApi'
import { NextLayout } from '@/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

type IData = {
  title: string
  description: string
  type: 'article' | 'image'
  image: string
}

const CreatePost: NextLayout = () => {
  const defaultValue: IData = {
    title: '',
    description: '',
    type: 'article',
    image: 'https://i.ibb.co/m8s5WCC/79964ff7a691bc08d4c3563162f9379e.jpg'
  }
  const [formData, setFormData] = useState<IData>(defaultValue)

  const [createContent] = useCreateContentMutation()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await createContent({ data: formData }).unwrap()

    if (res?.success) {
      toast.success('Content created successfull.')
      setFormData(defaultValue)
    } else {
      toast.error('Somthing is wrong. Try again.')
    }
  }

  return (
    <div>
      <DashTitle title="Create Post" />

      <form onSubmit={handleSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Type</span>
          </div>
          <select
            className="select select-bordered"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option disabled value="">
              Pick one
            </option>
            <option value="article">Article</option>
            <option value="image">Image</option>
          </select>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Image URL</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="image"
            value={formData.image}
            disabled={true}
            onChange={handleInputChange}
          />
        </label>

        <input
          type="submit"
          value="Submit"
          className="btn mt-10 text-textSecondary border-none"
          style={{
            background: 'linear-gradient(90deg, #4158D0 8.47%, #C850C0 50.26%, #FFCC70 88.71%)'
          }}
        />
      </form>
    </div>
  )
}

export default CreatePost

CreatePost.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
