import React from "react";
type SpeedProps = {
    SpeedText: number;
};

export const Speed = ({SpeedText} : SpeedProps) =>{
    return(
       <h1>{SpeedText}</h1>
    )
}