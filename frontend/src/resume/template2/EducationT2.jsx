import React from 'react'

function EducationT2({educations}) {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
          <div>
            <div className="flex justify-between">
              <strong>{educations.institute}, {education.location}</strong>
              <span>{education.graduationYear}</span>
            </div>
            <div>{educations.program}</div>
            <ul className="list-disc list-inside">
              {education.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default EducationT2