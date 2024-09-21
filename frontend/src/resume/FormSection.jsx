import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Link, Navigate, useParams } from 'react-router-dom';
import Summary from './forms/Summary';
import PersonalDetails from './forms/PersonalDetails';
import Projects from './forms/Projects';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(true);
  const {resumeId}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <Link to={"/dashboard"}>
                <Button><Home/></Button>
            </Link>
         
          </div>
          <div className='flex gap-2'>
            {activeFormIndex>1
            &&<Button size="sm" 
                onClick={()=>setActiveFormIndex(activeFormIndex-1)}> 
                <ArrowLeft/> 
            </Button> }
            <Button 
                disabled={!enableNext}
                className="flex gap-2" size="sm"
                onClick={()=>setActiveFormIndex(activeFormIndex+1)}
                > Next 
                <ArrowRight/> 
            </Button>
          </div>
        </div>

        
        {activeFormIndex==1?  
            <PersonalDetails enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==2?
            <Summary  enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==3?
            <Experience />  
        :activeFormIndex==4?
            <Education/>
        :activeFormIndex==5?
            <Projects/>
        :activeFormIndex==6?
            <Skills/>
        :activeFormIndex==7?
          <Navigate to={'/my-resume/'+resumeId+"/view"}/>
              
        :null
        }

    </div>
  )
}

export default FormSection