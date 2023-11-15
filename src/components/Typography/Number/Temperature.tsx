import React from "react";
type TemperatureProps = {
    TemperatureText: number;
};

export const Temperature = ({TemperatureText} : TemperatureProps) =>{
    return(
       <h1>{TemperatureText}</h1>
    )
}