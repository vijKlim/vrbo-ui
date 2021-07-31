import { actionTypes } from './../actions/action-types';

const INITIAL_STATE = {
    language: 'en'
};

const appReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actionTypes.app.ON_LANGUAGE_CHANGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return { ...state };
    }
}

export default appReducer;