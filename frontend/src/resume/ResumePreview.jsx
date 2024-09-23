import React from 'react'


function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);
  

  // Render different templates based on templateId
  const renderTemplate = ({resumeInfo}) => {
    // console.log("Resume Info:", resumeInfo.templateId);
    // if (!resumeInfo || !resumeInfo.templateId) {
    //     console.error("resumeInfo or templateId is undefined");
    //     return null;
    //   }
    
    switch (resumeInfo?.templateId) {
        
        case 'template1':
            return (
            <Template1Preview resumeInfo={resumeInfo} />
            );
        case 'template2':
            return (
            <Template2Preview resumeInfo={resumeInfo} />
            );
        case 'template3':
            return(
                <Template3Preview resumeInfo={resumeInfo}/>
            );
        case 'template4':
            return(
                <Template4Preview resumeInfo={resumeInfo}/>
            )
        
        default:
            // Default layout (existing one)
            return (
            <div
            
                className="shadow-lg h-full p-14 border-t-[20px]"
                style={{ borderColor: resumeInfo?.themeColor }}
            >
                {/* Personal Detail */}
                <PersonalDetailPreview resumeInfo={resumeInfo} />
                {/* Summary */}
                <SummeryPreview resumeInfo={resumeInfo} />
                {/* Professional Experience */}
                {resumeInfo?.Experience?.length > 0 && (
                <ExperiencePreview resumeInfo={resumeInfo} />
                )}
                {/* Educational */}
                {resumeInfo?.education?.length > 0 && (
                <EducationalPreview resumeInfo={resumeInfo} />
                )}
                {/* Skills */}
                {resumeInfo?.skills?.length > 0 && (
                <SkillsPreview resumeInfo={resumeInfo} />
                )}
            </div>
           
            );
    }
  };

  return (
    <div>
      {resumeInfo ? renderTemplate(resumeInfo) : <p>Loading...</p>}
    </div>
  );
}

export default ResumePreview;