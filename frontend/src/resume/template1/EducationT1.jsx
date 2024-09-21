import React from 'react'

function EducationT1({educations}) {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
          {educations.map((education, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{education.institute}</h3>
              </div>
              <p className="italic">{education.program}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
      );
}

export default EducationT1