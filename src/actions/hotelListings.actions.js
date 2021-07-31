import { actionTypes } from './action-types';

/**
 * 
 * @param {*} searchTerm 
 * Action to handle when a particular search Term is keyed in
 */
export const onSearch = (searchTerm) => ({
    type: actionTypes.search.SEARCH_HOTELS,
    payload: searchTerm
});

/**
 * 
 * @param {*} pageIndex 
 * Action to handle pagination
 */
export const onPageChange = (pageIndex) => ({
    type: actionTypes.search.ON_PAGE_CHANGE,
    payload: pageIndex
})