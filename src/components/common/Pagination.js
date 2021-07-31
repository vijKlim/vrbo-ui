import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme =>({ 
    root: {
        display: 'inline-flex'
    }
}));

/**
 * 
 * @param {*} props 
 * Component to handle pagination of the listings
 */

const Pagination = (props) => {
    const { totalRecords, pageIndex, pageLimit, onPageChange } = props;
    const classes = useStyles();

    const setPageIndex = (pageIndex) => {
        onPageChange(pageIndex)
    }

    const difference = (totalRecords - (pageIndex * pageLimit));
    const currentPageRecords = ((pageIndex + 1) * pageLimit);
    return (
        <div className={classes.root}>
            {pageIndex > 0 && <ArrowLeft onClick={() => setPageIndex(pageIndex - 1)}/>}
            <div>
                {`${(pageIndex * pageLimit) + 1} - ${currentPageRecords > totalRecords ? totalRecords : currentPageRecords} of ${totalRecords} records`}
            </div>
            { (difference > pageLimit) && <ArrowRight onClick={() => setPageIndex(pageIndex + 1)}/>}
        </div>
        
    );
}

Pagination.propTypes = {
    totalRecords: PropTypes.number,
    pageIndex: PropTypes.number,
    pageLimit: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;