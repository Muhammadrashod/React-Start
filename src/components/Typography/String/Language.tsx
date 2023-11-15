import React from "react";
type LanguageProps = {
    LanguageText: string;
};

export const Language = ({ LanguageText } : LanguageProps) => {
    return(
        <h1>{LanguageText}</h1>
    )
}