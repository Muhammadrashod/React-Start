import React from "react";
type CountryProps = {
    CountryText : string;
};

export const Country = ({CountryText} : CountryProps) => {
    return(
        <h1>{CountryText}</h1>
    )
}