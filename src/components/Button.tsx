import React, {PropsWithChildren} from "react";

export const Button: React.FC<PropsWithChildren<{href: string}>> = (props) => {
  return <>
    <a href={props.href}>
      <button className="bg-white text py-2 px-4 font-bold rounded" style={{color: "#282632"}}>
        {props.children}
      </button>
    </a>
  </>
}