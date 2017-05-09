import React from "react";
import { connect } from "react-redux";
import { textEditStateSelector, toggleEditMode } from "../../store/text-edit-actions";

export const TextDisplayComponent = (props) => {
    const {textValue, toggleEditMode} = props;
    return (
        <div className="edit-box">
            <div onClick={toggleEditMode}>
                [ {textValue} ]
            </div>
        </div>
    )
};

export const TextDisplay = connect(
    textEditStateSelector,
    (dispatch) => ({
        toggleEditMode() {
            dispatch(toggleEditMode());
        }
    })
)(TextDisplayComponent);