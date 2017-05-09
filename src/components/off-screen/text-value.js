import React from "react";
import {TextEdit} from "./text-edit";
import {TextDisplay} from "./text-display";

export const TextValue = (props) => {
    return (
        <div className="off-screen">
            <TextDisplay />
            <TextEdit />
        </div>
    )
};
