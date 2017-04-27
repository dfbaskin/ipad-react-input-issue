Demonstrates an issue with bringing up the keyboard on iPad and other
tablet devices outside of an event handler.

[https://dfbaskin.github.io/ipad-react-input-issue/](https://dfbaskin.github.io/ipad-react-input-issue/)

The key issue is whether toggling edit mode occurs inside or outside
of the `click` event handler.  Outside of the handler, the keyboard
does not automatically display.

```js
    toggleEditMode = () => {
        const {editModeEnabled, outsideOfEventHandler} = this.state;
        const toggle = () => this.setState(() => ({ editModeEnabled: !editModeEnabled }));
        if(outsideOfEventHandler) {
            setTimeout(toggle);
        } else {
            toggle();
        }
    };
```
