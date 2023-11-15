import React from "react";
type hasChildrenProps = {
  hasChildrenText: boolean;
};

export const hasChildren = ({ hasChildrenText }: hasChildrenProps) => {
  if (false) {
    return(
       <h1>{hasChildrenText}</h1>
    ) 
  }
};
