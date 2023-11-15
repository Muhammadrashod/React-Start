import React from "react";
type ProfessionProps = {
    ProfessionText: string;
};

export const Profession = ({ ProfessionText } : ProfessionProps) => {
    return(
        <h1>{ProfessionText}</h1>
    )
}