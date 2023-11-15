import React from "react";
type SportProps = {
    SportText: string;
}

export const Sport = ({SportText} : SportProps) => {
 return(
    <h1>{SportText}</h1>
 )
} 