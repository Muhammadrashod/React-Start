import React from "react";
type PopulationProps = {
    PopulationText: number;
};

export const Population = ({PopulationText} : PopulationProps) =>{
    return(
       <h1>{PopulationText}</h1>
    )
}