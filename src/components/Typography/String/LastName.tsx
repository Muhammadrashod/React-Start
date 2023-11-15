import React from "react";
type LastNameProps = {
    LastNameText: string;
};

export const LastName = ({LastNameText } : LastNameProps) => {
    return(
        <h1>{LastNameText}</h1>
    )
}