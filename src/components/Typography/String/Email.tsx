import React from "react";
type EmailProps = {
    EmailText: string;
};

export const Email = ({ EmailText } : EmailProps) => {
    return(
        <h1>{EmailText}</h1>
    )
}