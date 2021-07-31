import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';

const listingSelector = state => state.hotelListing.listings;
const totalRecordsSelector = state => state.hotelListing.totalRecords;
export const orderSelector = state => state.hotelListing.averagePriceFilter;
export const bedroomsFilterSelector = state => state.hotelListing.bedroomsFilter;
export const searchTermSelector = state => state.hotelListing.searchTerm;
export const pageIndexSelector = state => state.hotelListing.pageIndex;

export const listingState = createSelector(
    listingSelector,
    hotelListing => hotelListing
);

export const createBedroomFilters = createSelector(
    listingSelector,
    items => uniq(items.map(value => value.bedrooms)).sort((a,b) => a - b)
);

export const bedroomsFilterState = createSelector(
    bedroomsFilterSelector,
    bedroomsFilter => bedroomsFilter
);

export const totalRecordsState = createSelector(
    totalRecordsSelector,
    totalRecords => totalRecords
);

export const pageIndexState = createSelector(
    pageIndexSelector,
    pageIndex => pageIndex
);

