import axios from 'axios';
import React from 'react'
import FormSection from './FormSection';
import ResumePreview from './ResumePreview';


function EditResume() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
       
        getResumeInfo();
    },[])


    // const GetResumeInfo=()=>{
    //     GlobalApi.GetResumeById(resumeId).then(resp=>{
    //       console.log(resp.data);
    //       setResumeInfo(resp.data.data);
    //     })
    // }

    async function getResumeInfo(){
        const res = await axios({
            method: "get",
            baseURL: import.meta.env.VITE_BASE_URL,
            url: "api/resume/",
            params:{
                resumeId: resumeId
            },

        })
        console.log(res.data)
        setResumeInfo(res.data)
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section  */}
          <FormSection/>
        {/* Preview Section  */}
        {resumeInfo && <ResumePreview templateId={resumeInfo.templateId} />}
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume