import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ResumeCardItem() {
  const navigation=useNavigate();
  const [openAlert,setOpenAlert]=useState(false);
  const [loading,setLoading]=useState(false);
  // const onMenuClick=(url)=>{
  //   navigation(url)
  // }


  const onDelete= async (resumeId)=>{
    setLoading(true);
    try{
    const res = await axios({
      method: "delete",
      baseURL: import.meta.env.VITE_BASE_URL,
      url: "/api/resume",
      params:{
        resumeId: resumeId
      }
    })

    if(res.data.success){
      toast('Resume Deleted!');
      // refreshData()
      setLoading(false);
      setOpenAlert(false);
    }else {
      console.error("Failed to delete the resume:", res.data);
      toast('failed to delete the resume!')
    }
    } catch(error){
      console.error("error occured while deleting the reume", error)
    }finally{
      setLoading(false);
    }
  }

  return (
    <div></div>
  //   <div className=''>
  //      <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
  //    <div className='p-14  bg-gradient-to-b
  //      from-green-300 via-blue-400 to-blue-200
  //    h-[280px] 
  //      rounded-t-lg border-t-4 border-green-700
  //    '
  //    >
  //          <div className='flex 
  //    items-center justify-center h-[180px] '>
  //            {/* <Notebook/> */}
  //            <img src="/cv.png" width={80} height={80} />
  //          </div>
  //    </div>
  //    </Link>
  //    <div className='border p-3 flex justify-between  text-black rounded-b-lg shadow-lg'>
  //      <h2 className='text-sm'>{resume.title}</h2>
      
  //      <DropdownMenu>
  //      <DropdownMenuTrigger>
  //      <MoreVertical className='h-4 w-4 cursor-pointer'/>
  //      </DropdownMenuTrigger>
  //      <DropdownMenuContent>
        
  //        <DropdownMenuItem  onClick={()=>navigation('/dashboard/resume/'+resume.documentId+"/edit")}>Edit</DropdownMenuItem>
  //        <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>View</DropdownMenuItem>
  //        <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>Download</DropdownMenuItem>
  //        <DropdownMenuItem onClick={()=>setOpenAlert(true)}>Delete</DropdownMenuItem>
         
  //      </DropdownMenuContent>
  //    </DropdownMenu>

  //    <AlertDialog open={openAlert}>
     
  //    <AlertDialogContent>
  //      <AlertDialogHeader>
  //        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
  //        <AlertDialogDescription>
  //          This action cannot be undone. This will permanently delete your account
  //          and remove your data from our servers.
  //        </AlertDialogDescription>
  //      </AlertDialogHeader>
  //      <AlertDialogFooter>
  //        <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
  //        <AlertDialogAction onClick={onDelete} 
  //        disabled={loading}>
  //          {loading? <Loader2Icon className='animate-spin'/>:'Delete'}
  //          </AlertDialogAction>
  //      </AlertDialogFooter>
  //    </AlertDialogContent>
  //  </AlertDialog>

  //    </div>
  //    </div>

)
}

export default ResumeCardItem