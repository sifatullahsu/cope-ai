import Image from 'next/image'
import Link from 'next/link'
import aiGenerateIcon from '../assets/icons/ai-generate.svg'
import analyticsIcon from '../assets/icons/analytics.svg'
import dashboardIcon from '../assets/icons/dashboard.svg'
import plusIcon from '../assets/icons/plus.svg'
import postsIcon from '../assets/icons/posts.svg'
import schedulesIcon from '../assets/icons/schedules.svg'
import setingsIcon from '../assets/icons/settings.svg'
import logo from '../assets/logo.png'
import MenuItem from './MenuItem'

const LeftSideBar = () => {
  return (
    <div>
      <div className="px-8 pt-4 pb-10">
        <Image src={logo} alt="logo" />

        <div className="rr-menu">
          <MenuItem href="/dashboard">
            <Image src={dashboardIcon} alt="das" /> Dashboard
          </MenuItem>
          <MenuItem href="/dashboard/ai-generate" isActive={true}>
            <Image src={aiGenerateIcon} alt="das" /> AI Generate
          </MenuItem>
          <MenuItem href="/dashboard/posts">
            <Image src={postsIcon} alt="das" /> Posts
          </MenuItem>
          <MenuItem href="/dashboard/schedules">
            <Image src={schedulesIcon} alt="das" /> Schedules
          </MenuItem>
          <MenuItem href="/dashboard/analytics">
            <Image src={analyticsIcon} alt="das" /> Analytics
          </MenuItem>
          <MenuItem href="/dashboard/settings">
            <Image src={setingsIcon} alt="das" /> Settings
          </MenuItem>
        </div>

        <div className="mt-[168px]">
          <Link
            href="/dashboard/posts"
            className="border-2 border-dashed border-[#FFFFFF29] rounded-2xl p-9 block "
          >
            <div className="flex flex-col items-center">
              <span
                className="p-4 rounded-full mb-5"
                style={{
                  background: 'linear-gradient(90deg, #4158D0 8.47%, #C850C0 50.26%, #FFCC70 88.71%)'
                }}
              >
                <Image src={plusIcon} alt="" />
              </span>
              <span className="text-textSecondary font-semibold mb-1">Create new workspace</span>
              <span className="text-xs">Up to 5 workspaces</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
