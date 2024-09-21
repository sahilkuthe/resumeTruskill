import { PlusSquare } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  const {resumeList, setResumeList } = useState([]);

  const getResumeList = () => {
    
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <div onClick={handleAddResume}>
          <div className='p-14 py-24 border 
          items-center flex 
          justify-center bg-gradient-to-b
          from-green-300 via-blue-400 to-blue-200
          rounded-lg h-[280px]
          hover:scale-105 transition-all hover:shadow-md
          cursor-pointer border-dashed'
          onClick={navigate('/dashboard/create-resume')}
          >
            <PlusSquare  />
          </div>
        </div>
        {resumeList.length > 0 ? resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
        )) : 
        [1,2,3,4].map((item, index) => (
          <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard