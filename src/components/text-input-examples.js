import React, {PureComponent} from "react";
import {TextValue as TextValueSimple} from "./simple/text-value";
import {TextValue as TextValueOutside} from "./outside/text-value";
import "./text-input-examples.css";

export const ExampleRadioButton = (props) => {
    const {value, selected, onChange, children} = props;
    return (
        <label>
            <input
                type="radio"
                name="selectedExample"
                value={value}
                checked={value === selected}
                onChange={onChange}
            />
            {children}
        </label>
    )
};

export const ExampleDescription = (props) => {
    const {value, selected, children} = props;
    return value === selected ? (
        <div>
            {children}
        </div>
    ) : null;
};

export const Example = (props) => {
    const {value, selected, children} = props;
    return value === selected ? children : null;
};

export class TextInputExamples extends PureComponent {

    constructor() {
        super();
        this.state = {
            selectedExample: "simple"
        };
    }

    exampleChanged = (evt) => {
        const {value} = evt.target;
        this.setState(() => ({
            selectedExample: value
        }));
    };

    render() {
        const {selectedExample} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="large-6 columns">
                        <h4>Choose:</h4>
                        <ExampleRadioButton value="simple" selected={selectedExample} onChange={this.exampleChanged}>
                            Simple
                        </ExampleRadioButton>
                        <ExampleRadioButton value="outside" selected={selectedExample} onChange={this.exampleChanged}>
                            Outside of Event Loop
                        </ExampleRadioButton>
                        <ExampleRadioButton value="redux" selected={selectedExample} onChange={this.exampleChanged}>
                            Using Redux
                        </ExampleRadioButton>
                    </div>
                    <div className="large-6 columns">
                        <h4>Example</h4>
                        <ExampleDescription value="simple" selected={selectedExample}>
                            <p>
                                Simple example. The user clicks on the static text and the input
                                field is displayed. This is done within the click handler.
                            </p>
                        </ExampleDescription>
                        <ExampleDescription value="outside" selected={selectedExample}>
                            <p>
                                The user clicks on the static text and the input field is displayed,
                                but outside of the click handler. This demonstrates that the keyboard
                                will not automatically display unless the user sets the focus to the
                                input field manually.
                            </p>
                        </ExampleDescription>
                    </div>
                </div>
                <div className="row">
                    <div className="large-12 columns example-box">
                        <Example value="simple" selected={selectedExample}>
                            <TextValueSimple/>
                        </Example>
                        <Example value="outside" selected={selectedExample}>
                            <TextValueOutside/>
                        </Example>
                        <Example value="redux" selected={selectedExample}>
                        </Example>
                    </div>
                </div>
            </div>
        )
    }
}
