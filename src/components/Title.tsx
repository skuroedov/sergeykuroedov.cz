import React from "react";

export const Title: React.FC = props => {
  return <>
    <p className="text-5xl font-bold text-center">
      {props.children}
    </p>
  </>
}