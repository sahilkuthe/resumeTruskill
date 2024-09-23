import React from 'react'

function PersonalDetailsT2({personalInfo}) {
    const { name, email, websiteLink, githubLink, linkedinLink, mobileNumber, summary } = personalInfo;
    return (
        <div className="mb-6">
          <h1 className="text-4xl font-bold uppercase mb-2">{name}</h1>
          <p className="text-sm">
            • {mobileNumber} • {email} • {linkedinLink}
          </p>
        </div>
    );
}

export default PersonalDetailsT2