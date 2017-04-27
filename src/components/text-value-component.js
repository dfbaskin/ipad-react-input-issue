import React, {PureComponent} from "react";

import {TextDisplay} from './text-display-component';
import {TextEdit} from './text-edit-component';

export class TextValue extends PureComponent {

    constructor() {
        super();
        this.state = {
            textValue: 'abc xyz',
            editModeEnabled: false,
            outsideOfEventHandler: false
        };
    }

    textValueChanged = (textValue) => {
        this.setState(() => ({ textValue }));
    };

    toggleOutside = () => {
        const {outsideOfEventHandler} = this.state;
        this.setState(() => ({ outsideOfEventHandler: !outsideOfEventHandler }));
    };

    toggleEditMode = () => {
        const {editModeEnabled, outsideOfEventHandler} = this.state;
        const toggle = () => this.setState(() => ({ editModeEnabled: !editModeEnabled }));
        if(outsideOfEventHandler) {
            setTimeout(toggle);
        } else {
            toggle();
        }
    };

    render(props){
        const {textValue, editModeEnabled, outsideOfEventHandler} = this.state;
        const {textValueChanged, toggleEditMode, toggleOutside} = this;
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
                <div>
                    <label>
                        <input type="checkbox" checked={outsideOfEventHandler} onChange={toggleOutside} />
                        Toggle Edit Mode Outside of Event Handler
                    </label>
                </div>
                {editModeEnabled ?
                    <TextEdit {...editProps} /> :
                    <TextDisplay {...displayProps} />
                }
            </div>
        )
    }
}
