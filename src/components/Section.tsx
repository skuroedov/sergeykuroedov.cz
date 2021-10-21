import React, {AllHTMLAttributes} from "react";

export const Section: React.FC<AllHTMLAttributes<HTMLDivElement>> = props => {
  return <>
    <div className="container mx-auto">
      <div {...props} className={`flex flex-col justify-center items-center h-screen p-20 gap-16 ${props.className}`}/>
    </div>
  </>
}