import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
    toggleEditMode,
    textEditStateSelector,
    updateTextValue
} from "../../store/text-edit-actions";

export class TextEditComponent extends PureComponent {

    setInputRef = (ref) => {
        this.inputRef = ref;
    };

    onChange = (evt) => {
        const {textValueChanged} = this.props;
        textValueChanged(evt.target.value)
    };

    onKeyDown = (evt) => {
        if (evt.key === "Escape" || evt.key === "Enter") {
            const {toggleEditMode} = this.props;
            toggleEditMode();
        }
    };

    componentWillUpdate(nextProps) {
        if(nextProps.editMode && !this.props.editMode) {
            const {inputRef} = this;
            setTimeout(() => {
                inputRef.focus();
                inputRef.select();
            });
        }
    }

    render() {
        const {props: {textValue, editMode}, setInputRef: ref, onChange, onKeyDown} = this;
        const inputProps = {
            type: "text",
            value: textValue,
            onChange,
            onKeyDown,
            ref,
            tabIndex: -1
        };
        const divStyle = editMode ? { left: 0 } : null;
        return (
            <div style={divStyle}>
                <label>
                    <span>Enter Text:</span>
                    <input {...inputProps} />
                </label>
            </div>
        )
    }
}

export const TextEdit = connect(
    textEditStateSelector,
    (dispatch) => ({
        textValueChanged(textValue) {
            dispatch(updateTextValue(textValue));
        },
        toggleEditMode() {
            dispatch(toggleEditMode());
        }
    })
)(TextEditComponent);