import React from 'react'

function SkillsT2() {
    return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">SKILLS & OTHER</h2>
          <p><strong>Skills:</strong> {skills.join(', ')}</p>
          {other && (
            <div className="mt-2">
              <p><strong>Personal project:</strong> {other.personalProject}</p>
            </div>
          )}
        </div>
    );
}

export default SkillsT2