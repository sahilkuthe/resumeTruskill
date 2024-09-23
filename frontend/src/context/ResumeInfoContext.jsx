import { createContext, useState } from "react";

export const ResumeInfoContext = createContext(null);

export const ResumeInfoProvider = ({ children }) => {
  const [resumeInfo, setResumeInfo] = useState(null); // State for resume info

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      {children}
    </ResumeInfoContext.Provider>
  );
};
