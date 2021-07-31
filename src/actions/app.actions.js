import { actionTypes } from './action-types';

/**
 * 
 * @param {*} language 
 * Action to handle language change
 */
export const onLanguageChange = (language) => ({
    type: actionTypes.app.ON_LANGUAGE_CHANGE,
    payload: language
})