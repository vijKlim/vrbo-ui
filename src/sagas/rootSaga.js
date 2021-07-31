import { all } from 'redux-saga/effects';

import { searchLocation, sortHotels, onBedroomFilterChange, onPageChange } from './hotelListing.saga';

export default function* rootSaga() {
    yield all([
        searchLocation(),
        sortHotels(),
        onBedroomFilterChange(),
        onPageChange()
    ]);
 }