import React from "react";
type WeightProps = {
    WeightText: number;
};

export const Weight = ({WeightText} : WeightProps) =>{
    return(
       <h1>{WeightText}</h1>
    )
}