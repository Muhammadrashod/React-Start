import React from "react";
type DistanceProps = {
   DistanceText: number;
};

export const Distance = ({DistanceText} : DistanceProps) =>{
    return(
       <h1>{DistanceText}</h1>
    )
}