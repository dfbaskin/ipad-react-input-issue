import React from "react";
import PropTypes from "prop-types";

export const TextDisplay = (props) => {
    const {textValue, toggleEditMode} = props;
    return (
        <div onClick={toggleEditMode}>
            [ {textValue} ]
        </div>
    )
};

TextDisplay.propTypes = {
    textValue: PropTypes.string.isRequired,
    toggleEditMode: PropTypes.func.isRequired
};
