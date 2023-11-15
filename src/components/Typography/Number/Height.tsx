import React from "react";
type HeightProps = {
    HeightText: number;
};

export const Height = ({HeightText}: HeightProps) =>{
    return(
       <h1>{HeightText}</h1>
    )
}