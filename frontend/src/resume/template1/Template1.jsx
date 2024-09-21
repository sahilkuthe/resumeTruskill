import React from 'react'
import PersonalDetailsT1 from './PersonalDetailsT1';
import ExperienceT1 from './ExperienceT1';
import EducationT1 from './EducationT1';
import ProjectsT1 from './ProjectsT1';
import SkillsT1 from './SkillsT1';

function Template1({resumeData}) {
    const { personalInfo, workExperience, education, projects, skills } = resumeData;

    return (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
        <PersonalDetailsT1 personalInfo={personalInfo} />
        <ExperienceT1 experiences={workExperience} />
        <EducationT1 educations={education} />
        <ProjectsT1 projects={projects} />
        <SkillsT1 skills={skills} />
      </div>
    );
}

export default Template1