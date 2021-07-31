import { combineReducers } from 'redux';

import appReducer from './app.reducer';
import hotelListingReducer from './hotelListing.reducer';

/**
 * Put all the store state in redux store
 */
const rootReducer = combineReducers({
    app: appReducer,
    hotelListing: hotelListingReducer
});
  
export default rootReducer;