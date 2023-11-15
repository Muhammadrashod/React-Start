import React from "react";
type HobbyProps = {
    HobbyText: string;
}

export const Hobby = ({ HobbyText } : HobbyProps) => {
    return(
        <h1>{HobbyText}</h1>
    )
}