import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { onSort } from '../../actions/filters.actions';

/**
 * 
 * @param {*} props 
 * Component to support the price filter
 */
const PriceFilter = (props) => {
    const { actions: { onSort } } = props;
    return (
        <Grid container spacing={1}>
            <Box p={2}>
                <Grid item xs={12}>
                    <Typography variant="caption">
                        <FormattedMessage id="listings.averageNightlyPrice" />
                    </Typography>
                </Grid>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        onSort(undefined)
                    }}
                >
                    Clear filter
                </Link>
            </Box>
            <Grid item xs={12}>
                <Box>
                    <Button color="primary" onClick={() => onSort('desc')}>
                        High to low
                    </Button>
                </Box>
                <Box>
                    <Button color="primary" onClick={() => onSort('asc')}>
                        Low to High
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onSort: (order) => dispatch(onSort(order))
        }
    }
};

PriceFilter.propTypes = {
    actions: PropTypes.shape({
        onSort: PropTypes.func
    })
};

export default connect(null, mapDispatchToProps)(PriceFilter);