import React from "react";
type isHappyProps = {
  isHappyText: boolean;
};

export const isHappy = ({ isHappyText }: isHappyProps) => {
  if (false) {
    return(
       <h1>{isHappyText}</h1>
    ) 
  }
};
