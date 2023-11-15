import React from "react";
type SalaryProps = {
    SalaryText: number;
};

export const Salary = ({SalaryText} : SalaryProps) =>{
    return(
       <h1>{SalaryText}</h1>
    )
}