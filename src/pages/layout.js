
import Navbar from '@/components/appComponent/dashboard/Navbar'
import Sidebar  from '../components/appComponent/dashboard/Sidebar'
import React from 'react'

const LayoutCom = ({children}) => {
  return (
    <>
    <div className="grid grid-cols-5 gap-10 m-6">
        <div className="bg-inherit">
          <Sidebar />
        </div>
        <div className="bg-inherit col-span-4">
            <Navbar />
            <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default LayoutCom
