import React from "react";
import {connect} from "react-redux";
import { textEditStateSelector, toggleEditMode, updateTextValue } from "../../store/text-edit-actions";

import {TextDisplay} from './text-display';
import {TextEdit} from './text-edit';

export const TextValueComponent = (props) => {
    const {textValue, editMode, textValueChanged, toggleEditMode} = props;
    const editProps = {
        textValue,
        textValueChanged,
        toggleEditMode
    };
    const displayProps = {
        textValue,
        toggleEditMode
    };
    return (
        <div className="edit-box">
            {editMode ?
                <TextEdit {...editProps} /> :
                <TextDisplay {...displayProps} />
            }
        </div>
    )
};

export const TextValue = connect(
    textEditStateSelector,
    (dispatch) => ({
        textValueChanged(textValue) {
            dispatch(updateTextValue(textValue));
        },
        toggleEditMode() {
            dispatch(toggleEditMode());
        }
    })
)(TextValueComponent);