import React, { memo } from 'react';
import { connect } from 'react-redux';

import { listingState, totalRecordsState, pageIndexState } from './../selectors/hotelListing.selector';
import { onSearch, onPageChange } from './../actions/hotelListings.actions';

import Search from './../components/search';
import HotelListings from './../components/hotel-listings';
import { PageContext } from './../context/PageContext';

import useStyles from '../styles/hotel-listings.styles';

const HotelListingContainer = (props) => {
    const { history, actions: { onSearch, onPageChange }, listings, totalRecords, pageIndex, noResultFound } = props;
    const classes = useStyles();

    const pageValues = {
        redirect: (...args) => history.push(...args)
    }

    return (
        <PageContext.Provider value={pageValues}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Search onSearch={onSearch}/>
                <HotelListings 
                    listings={listings} 
                    noResultFound={noResultFound}
                    totalRecords={totalRecords} 
                    pageIndex={pageIndex}
                    onPageChange={onPageChange}
                />
            </main>
        </PageContext.Provider>
    )
};

const mapStateToProps = state => {
    return {
        listings: listingState(state),
        totalRecords: totalRecordsState(state),
        pageIndex: pageIndexState(state),
        noResultFound: state.hotelListing.noResultFound
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onSearch: (searchTerm) => dispatch(onSearch(searchTerm)),
            onPageChange: (pageIndex) => dispatch(onPageChange(pageIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HotelListingContainer));