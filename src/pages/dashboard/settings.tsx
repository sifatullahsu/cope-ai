import DashTitle from '@/components/DashTitle'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useUpdateUserMutation } from '@/redux/api/usersApi'
import { NextLayout, TUser } from '@/types'
import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

const SettingsPage: NextLayout = () => {
  const { data: session, update } = useSession()

  const [formData, setFormData] = useState<{ name: string; email: string; scheduleHour: number }>({
    name: session?.user.name || '',
    email: session?.user.email || '',
    scheduleHour: session?.user.scheduleHour || 0
  })

  const [updateUser] = useUpdateUserMutation()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await updateUser({ id: session?.user._id, data: formData }).unwrap()

    if (res?.success) {
      toast.success('User update successfull.')
      const newData: Pick<TUser, 'name' | 'email' | 'scheduleHour'> = {
        name: res.data.name,
        email: res.data.email,
        scheduleHour: res.data.scheduleHour
      }
      await update(newData)
    } else {
      toast.error('Somthing is wrong. Try again.')
    }
  }

  return (
    <div>
      <DashTitle title="Settings" />
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="label">
            <span className="label-text">
              Please keep the email unchanged; the HomePage login button is set up to work with it and may not
              function properly if modified. Default:{' '}
              <span className="text-textSecondary">personal.sifat@gmail.com</span>
            </span>
          </div>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Schedule Hour</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="scheduleHour"
            value={formData.scheduleHour}
            onChange={handleInputChange}
          />
        </label>

        <input
          type="submit"
          value="Update Profile"
          className="btn mt-10 text-textSecondary border-none"
          style={{
            background: 'linear-gradient(90deg, #4158D0 8.47%, #C850C0 50.26%, #FFCC70 88.71%)'
          }}
        />
      </form>
    </div>
  )
}

export default SettingsPage

SettingsPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>
