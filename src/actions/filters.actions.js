import { actionTypes } from './action-types';

/**
 * 
 * @param {*} order 
 * Action to handle sorting of average nightly price
 */
export const onSort = (order) => ({
    type: actionTypes.filters.ON_SORT,
    payload: order
});

/**
 * 
 * @param {*} bedroom 
 * Action to handle the filter change for bedroom select
 */
export const onBedroomFilterChange = (bedroom) => ({
    type: actionTypes.filters.ON_BEDROOM_SELECT,
    payload: bedroom
})