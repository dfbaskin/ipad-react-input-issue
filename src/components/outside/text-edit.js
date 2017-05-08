import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export class TextEdit extends PureComponent {

    componentDidMount() {
        this.inputRef.focus();
        this.inputRef.select();
    }

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

    render() {
        const {textValue} = this.props;
        const {onChange, onKeyDown} = this;
        const inputProps = {
            type: "text",
            value: textValue,
            onChange,
            onKeyDown,
            ref: (inputRef) => { this.inputRef = inputRef; }
        };
        return (
            <label>
                <span>Enter Text:</span>
                <input {...inputProps} />
            </label>
        )
    }
}

TextEdit.propTypes = {
    textValue: PropTypes.string.isRequired,
    toggleEditMode: PropTypes.func.isRequired,
    textValueChanged: PropTypes.func.isRequired
};
