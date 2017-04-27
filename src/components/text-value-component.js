import React, {PureComponent} from "react";

import {TextDisplay} from './text-display-component';
import {TextEdit} from './text-edit-component';

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
        this.setState(() => ({ editModeEnabled: !editModeEnabled }));
    };

    render(props){
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
            <div>
                {editModeEnabled ?
                    <TextEdit {...editProps} /> :
                    <TextDisplay {...displayProps} />
                }
            </div>
        )
    }
}
