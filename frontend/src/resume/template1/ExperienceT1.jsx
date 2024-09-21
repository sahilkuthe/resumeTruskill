import React from 'react'

function ExperienceT1({experiences}) {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">WORK EXPERIENCE</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{experience.companyName}</h3>
              </div>
              <p className="italic">{experience.role}</p>
              <ul className="list-disc list-inside">
                {experience.responsibilities.split('\n').map((responsibility, idx) => (
                  <li key={idx}>{responsibility.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
}

export default ExperienceT1