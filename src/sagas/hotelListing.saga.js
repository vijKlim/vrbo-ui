import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from './../actions/action-types';

import { API_URL } from './../constants/app.constants';
import { searchTermSelector, bedroomsFilterSelector, orderSelector, pageIndexSelector } from '../selectors/hotelListing.selector';

const buildQueryParams = (searchValue, sortingOrder, bedroomsFilter) => {
    if (bedroomsFilter && sortingOrder) {
        return `searchValue=${searchValue}&sortingOrder=${sortingOrder}&bedrooms=${bedroomsFilter}`;
    } else if (sortingOrder) {
        return `searchValue=${searchValue}&sortingOrder=${sortingOrder}`;
    } else if (bedroomsFilter) {
        return `searchValue=${searchValue}&bedroomsCount=${bedroomsFilter}`;
    } else {
        return `searchValue=${searchValue}`;
    } 
}

/**
 * 
 * @param {*} searchTerm, order, bedroomsFilter, pageIndex
 * API to get the sorted listings for a search term
 */

function filtersApi(searchTerm, order, bedroomsFilter, pageIndex) {
    let queryParams = buildQueryParams(searchTerm, order, bedroomsFilter);
    console.log(queryParams);
    if (pageIndex > 0) {
        queryParams = `${queryParams}&page=${pageIndex}`
    }
    return axios.get(`${API_URL}/hotels?${queryParams}`);
}

/**
 * 
 * @param {*} action 
 * Search term and pagination
 * Generator yield to put meta data success with payload
 * {payload: {
 *  data: listings data
 * }}
 */
function* fetchListings(action) {  
    const searchTerm = yield select(searchTermSelector);
    const order = yield select(orderSelector); 
    const bedroomsFilter = yield select(bedroomsFilterSelector);
    const pageIndex = yield select(pageIndexSelector);  
    try {
        const searchTermResponse = yield call(filtersApi, searchTerm, order, bedroomsFilter, pageIndex);
        yield put({ type: actionTypes.search.SEARCH_HOTELS_SUCCESS, payload: {
            data: searchTermResponse.data.data
        }});
    } catch (err) {
        yield put({ type: actionTypes.search.SEARCH_HOTELS_FAILURE, payload: {
            searchTerm: action.payload
        } });
    }
}

/**
 * Watchers on ACTION dispatch
 */
export function* searchLocation() {
    yield takeLatest(actionTypes.search.SEARCH_HOTELS, fetchListings);
}

export function* sortHotels() {
    yield takeLatest(actionTypes.filters.ON_SORT, fetchListings);
}

export function* onBedroomFilterChange() {
    yield takeLatest(actionTypes.filters.ON_BEDROOM_SELECT, fetchListings);
}

export function* onPageChange() {
    yield takeLatest(actionTypes.search.ON_PAGE_CHANGE, fetchListings);
}