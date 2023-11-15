import React from "react";
type hasCarProps = {
  hasCarText: boolean;
};

export const hasCar = ({ hasCarText }: hasCarProps) => {
  if (true) {
    return(
       <h1>{hasCarText}</h1>
    ) 
  }
};
