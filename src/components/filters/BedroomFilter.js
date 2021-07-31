import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import map from 'lodash/map';

import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { onBedroomFilterChange } from '../../actions/filters.actions';
import { createBedroomFilters, bedroomsFilterState } from '../../selectors/hotelListing.selector';

/**
 * 
 * @param {*} props 
 * Filter to support the filtering of the bedrooms bases on the number of bedrooms returned by the listings
 */
const BedroomFilter = (props) => {
    const { bedrooms, actions: { onBedroomFilterChange }, bedroomsFilterValue } = props;

    return (
        <Grid container spacing={1}>
            <Box p={2}>
                <Grid item xs={12}>
                    <Typography variant="caption">
                        <FormattedMessage id="listings.numberOfBedrooms" />
                    </Typography>
                </Grid>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        onBedroomFilterChange(undefined)
                    }}
                >
                    Clear filter
                </Link>
            </Box>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="bedroom"
                        name="bedroom"
                        value={bedroomsFilterValue}
                        onChange={(e) => onBedroomFilterChange(e.target.value)}
                    >
                    {map(bedrooms, value => {
                        return <FormControlLabel
                            key={value}
                            value={value.toString()}
                            control={<Radio color="primary" />}
                            label={value}
                            checked={bedroomsFilterValue === value.toString()}
                            labelPlacement="start"
                        />
                    })}
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => {
    return {
        bedrooms: createBedroomFilters(state),
        bedroomsFilterValue: bedroomsFilterState(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onBedroomFilterChange: (bedroom) => dispatch(onBedroomFilterChange(bedroom))
        }
    }
};

BedroomFilter.propTypes = {
    bedrooms: PropTypes.array,
    bedroomsFilterValue: PropTypes.string,
    actions: PropTypes.shape({
        onBedroomFilterChange: PropTypes.func
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BedroomFilter);