import React from "react";
type PriceProps = {
    PriceText: number;
};

export const Price = ({PriceText} : PriceProps) =>{
    return(
       <h1>{PriceText}</h1>
    )
}