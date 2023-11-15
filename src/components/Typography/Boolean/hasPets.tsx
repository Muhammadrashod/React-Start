import React from "react";
type hasPetsprops = {
  hasPetsText: boolean;
};

export const hasPets= ({ hasPetsText }: hasPetsprops) => {
  if (true) {
    return(
       <h1>{hasPetsText}</h1>
    ) 
  }
};
