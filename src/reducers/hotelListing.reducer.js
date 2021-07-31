import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { PAGE_LIMIT } from './../constants/app.constants';
import { actionTypes } from './../actions/action-types';

const INITIAL_STATE = {
    searchTerm: '',
    listings: [],
    noResultFound: false,
    pageTitle: '',
    pageIndex: 0,
    totalRecords: 0,
    showFilters: false,
    averagePriceFilter: undefined,
    bedroomsFilter: undefined
};

const hotelListingReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actionTypes.search.SEARCH_HOTELS:
            return {
                ...state,
                searchTerm: action.payload
            }
        case actionTypes.filters.ON_SORT: 
            return {
                ...state,
                averagePriceFilter: action.payload
            }
        case actionTypes.filters.ON_BEDROOM_SELECT:
            return {
                ...state,
                bedroomsFilter: action.payload
            }
        case actionTypes.search.ON_PAGE_CHANGE: 
            return {
                ...state,
                pageIndex: action.payload
            }
        case actionTypes.search.SEARCH_HOTELS_SUCCESS:
            return {
                ...state,
                noResultFound: isEmpty(action.payload.data),
                pageTitle: get(action.payload, 'data.pageTitle', ''),
                listings: get(action.payload, 'data.listings', []),
                showFilters: get(action.payload, 'data.listings', []).length > 0 ,
                totalRecords: get(action.payload, 'data.totalRecords', 0),
                pageIndex: get(action.payload, 'data.totalRecords', 0) <= PAGE_LIMIT ? 0 : state.pageIndex 
            }
        default:
            return { ...state };
    }
}

export default hotelListingReducer;