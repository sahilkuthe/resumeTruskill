import React from 'react'

function ProjectsT1({projects}) {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">PROJECTS</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
    );
}

export default ProjectsT1