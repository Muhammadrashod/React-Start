import React from "react";
type NameProps = {
  NameText: string;
};

export const Name = ({ NameText }: NameProps) => {
  return(
       <h1>{NameText}</h1>
      )
}
