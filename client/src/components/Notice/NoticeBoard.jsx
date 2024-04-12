import React from 'react'
import Notice from '../Cards/Notice'
import DeptNotice from "./DeptNotice"
import ClubNotice from "./ClubNotice"

function NoticeBoard() {
  return (
    <main className="flex">
      
      {/* Left Section */}

      <div className='w-1/2'>
      <div className='shadow-lg'>
      <h2 className="text-lg font-semibold text-center bg-blue-500 text-white">Dept Notice</h2>
      </div>
      <div className=" flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
        <DeptNotice/>
      </div>
      </div>

      {/* Right Section */}

      <div className='w-1/2'>
      <div className=' shadow-lg'>
      <h2 className="text-lg font-semibold text-center bg-blue-500 text-white">Club Notice</h2>
      </div>
      <div className="flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
        <ClubNotice/>
      </div>
      </div>
    
    </main>
  )
}

export default NoticeBoard