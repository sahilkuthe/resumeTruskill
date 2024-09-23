import React from 'react'

function ExperienceT2() {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">PROFESSIONAL EXPERIENCE</h2>
          {experiences.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{job.company}, {job.location}</strong>
                <span>{job.startDate} – {job.endDate}</span>
              </div>
              <div className="italic">{job.title}</div>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    );
}

export default ExperienceT2