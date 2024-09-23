import React from 'react'

function Template2({resumeData}) {
    const { personalInfo, workExperience, education, projects, skills } = resumeData;
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
          <PersonalDetails data={resumeData.personalDetails} />
          <Experience experiences={resumeData.experiences} />
          <Education education={resumeData.education} />
          <Skills skills={resumeData.skills} other={resumeData.other} />
        </div>
    );
}

export default Template2