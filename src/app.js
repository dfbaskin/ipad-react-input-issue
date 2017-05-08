import React, { PureComponent } from 'react';
import { TextInputExamples } from './components/text-input-examples';

export class App extends PureComponent {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <h3>React Dynamic Input Example</h3>
                    <p>
                        Demonstrates creating an input field dynamically from a click
                        or touch event.
                    </p>
                </div>
                <TextInputExamples/>
            </div>
        );
    }
}
