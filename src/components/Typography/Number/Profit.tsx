import React from "react";
type ProfitProps = {
    ProfitText: number;
};

export const Profit = ({ProfitText} : ProfitProps) =>{
    return(
       <h1>{ProfitText}</h1>
    )
}