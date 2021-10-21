import React from "react";

export const Block: React.FC = props => {
  return <>
    <div className="border border-2 rounded p-10 flex flex-col items-center space-y-4 text-center">
      {props.children}
    </div>
  </>
}

export const BlockTitle: React.FC = props => {
  return <>
    <p className="text-3xl font-bold mb-4">
      {props.children}
    </p>
  </>
}