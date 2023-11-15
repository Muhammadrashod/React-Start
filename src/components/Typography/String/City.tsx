import React from "react";
type CityProps = {
    CityText: string;
};

export const City = ({ CityText } : CityProps) => {
    return(
        <h1>{CityText}</h1>
    )
}