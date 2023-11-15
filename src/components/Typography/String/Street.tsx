import React from "react";
type StreetProps = {
    StreetText: string;
};

export const Street = ({ StreetText } : StreetProps) => {
    return(
        <h1>{StreetText}</h1>
    )
}