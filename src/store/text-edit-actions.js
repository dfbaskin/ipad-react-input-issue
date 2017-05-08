
import { createSelector } from "reselect";

const UPDATE_TEXT_VALUE = "UPDATE_TEXT_VALUE";
const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";

export const updateTextValue = (textValue) => ({
    type: UPDATE_TEXT_VALUE,
    payload: { textValue }
});

export const toggleEditMode = () => ({
    type: TOGGLE_EDIT_MODE
});

export const initialState = {
    editMode: false,
    textValue: 'abc xyz'
};

export const textEditState = (state) => state.textEdit;

export const textEditStateSelector = createSelector(
    textEditState,
    ({editMode, textValue}) => ({
        editMode,
        textValue
    })
);

export const textEditReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_TEXT_VALUE:
            return {
                ...state,
                textValue: payload.textValue
            };
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: !state.editMode
            };
        default:
            return state;
    }
};
