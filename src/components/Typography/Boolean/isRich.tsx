import React from "react";
type isRichProps = {
  isRichText: boolean;
};

export const isRich = ({ isRichText }: isRichProps) => {
  if (true) {
    return(
       <h1>{isRichText}</h1>
    ) 
  }
};
