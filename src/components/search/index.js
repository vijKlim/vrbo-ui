import React, { memo, useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import isEmpty from 'lodash/isEmpty';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { PageContext } from '../../context/PageContext';

import useStyles from '../../styles/hotel-listings.styles';

/**
 * 
 * @param {*} props 
 * Component to type in search Term and find results
 */

const Search = (props) => {
    const { onSearch } = props;
    const [state, setState] = useState({ location: '' });
    const classes = useStyles();
    const { redirect } = useContext(PageContext);

    const handleChange = (e) => {
        setState({ ...state, location: e.target.value });
    }

    const onSearchClick = () => {
        const { location } = state;

        if (isEmpty(location)) {
            return;
        }

        redirect({
            path: '/',
            search: `?searchValue=${location}`
        })

        onSearch(location);
    }

    return (
        <Grid container className={classes.searchButton} spacing={3}>
            <Grid  item xs={9}>
                <TextField
                    id="location-name"
                    label="Location"
                    className={classes.textField}
                    value={state.location}
                    onChange={handleChange}
                    margin="normal"
            
                />
            </Grid>
            <Grid item xs={3} className={classes.searchButton}>
                <Button variant="contained" color="primary" onClick={onSearchClick}>
                    <FormattedMessage id="listings.search" />
                </Button>
            </Grid>
        </Grid>
    );
}

export default memo(Search);