import React, {PureComponent} from "react";

import {TextDisplay} from './text-display';
import {TextEdit} from './text-edit';

export class TextValue extends PureComponent {

    constructor() {
        super();
        this.state = {
            textValue: 'abc xyz',
            editModeEnabled: false
        };
    }

    textValueChanged = (textValue) => {
        this.setState(() => ({ textValue }));
    };

    toggleEditMode = () => {
        const {editModeEnabled} = this.state;
        setTimeout(() => {
            this.setState(() => ({ editModeEnabled: !editModeEnabled }));
        });
    };

    render() {
        const {textValue, editModeEnabled} = this.state;
        const {textValueChanged, toggleEditMode} = this;
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
                {editModeEnabled ?
                    <TextEdit {...editProps} /> :
                    <TextDisplay {...displayProps} />
                }
            </div>
        )
    }
}
