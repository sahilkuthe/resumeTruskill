import axios from 'axios';
import { PlusSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeCardItem from '../customComponents/ResumeCardItem'; // Assuming you have a component for rendering resume cards

function Dashboard() {
  const navigate = useNavigate();
  const [resumeList, setResumeList] = useState([]); // Correct state declaration

  // Function to fetch resume list from backend
  async function getResumeList() {
    try {
      const res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_BASE_URL,
        url: "/api/resume",
        headers: {
          authtoken: localStorage.getItem('token'),
        },
      });
      setResumeList(res.data); // Set the fetched resume list
    } catch (error) {
      console.error('Error fetching resume list:', error);
    }
  }

  useEffect(() => {
    getResumeList(); // Fetch resume list when component mounts
  }, []);

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        {/* Button to create a new resume */}
        <div>
          <div
            className='p-14 py-24 border 
          items-center flex 
          justify-center bg-gradient-to-b
          from-green-300 via-blue-400 to-blue-200
          rounded-lg h-[280px]
          hover:scale-105 transition-all hover:shadow-md
          cursor-pointer border-dashed'
            onClick={() => navigate('/dashboard/create-resume')} // Pass function to onClick
          >
            <PlusSquare />
          </div>
        </div>

        {/* Render the resume list */}
        {resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} refreshData={getResumeList} /> // Correctly referencing the function
          ))
        ) : (
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
