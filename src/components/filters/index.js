import React, { Fragment } from 'react';

import PriceFilter from './PriceFilter';
import BedroomFilter from './BedroomFilter';

/**
 * 
 * @param {*} props 
 * Wrapper component to invoke all the filters
 */
const Filters = (props) => {
    return (
        <Fragment>
            <PriceFilter />
            <BedroomFilter />
        </Fragment>
    );
};

export default Filters;