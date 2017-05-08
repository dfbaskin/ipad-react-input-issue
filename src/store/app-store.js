
import { createStore, combineReducers } from 'redux';
import { textEditReducer as textEdit } from './text-edit-actions';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const reducers = combineReducers({
    textEdit
});

export const appStore = createStore(
    reducers,
    {},
    devToolsExtension ? devToolsExtension() : f => f
);
