import React from 'react'

function PersonalDetailsT1({personalInfo}) {
  const { name, email, websiteLink, githubLink, linkedinLink, mobileNumber, summary } = personalInfo;

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <div className="text-center text-gray-600">
        <p>{mobileNumber} | {email}</p>
        <p>
          {websiteLink && <span className="mr-2">{websiteLink}</span>}
          {githubLink && <span className="mr-2">{githubLink}</span>}
          {linkedinLink && <span>{linkedinLink}</span>}
        </p>
      </div>
      {summary && <p className="mt-4 text-sm">{summary}</p>}
    </div>
  );
}

export default PersonalDetailsT1