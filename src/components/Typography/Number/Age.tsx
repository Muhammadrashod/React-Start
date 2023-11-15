import React from "react";
type AgeProps = {
    AgeText: number;
};

export const Age = ({AgeText} : AgeProps) =>{
    return(
       <h1>{AgeText}</h1>
    )
}