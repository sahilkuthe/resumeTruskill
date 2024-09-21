import React from 'react'

function SkillsT1({skills}) {
    return (
        <div>
          <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
          <p>{skills.join(', ')}</p>
        </div>
      );
}

export default SkillsT1