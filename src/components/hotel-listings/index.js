import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import sample from 'lodash/sample';
import { FormattedMessage } from 'react-intl';

import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Pagination from './../common/Pagination';
import { PARENT_APPLICATION_URI, PAGE_LIMIT } from './../../constants/app.constants';
import useStyles  from './../../styles/hotel-listings.styles';

/**
 * 
 * @param {*} props 
 * Main Component to support all the hotels listings
 * Show No results found if the searchTerm doesn't match
 * Show the listings if searchTerm matches
 * Handle pagination
 */
const HotelListings = (props) => {
    const { listings, pageIndex, totalRecords, onPageChange, noResultFound } = props;
    const classes = useStyles();

    if (noResultFound && listings.length === 0) {
        return <Grid item xs={9}>
            <SnackbarContent
                autohideduration={6000}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <InfoIcon />
                        <span style={{ marginLeft: '10px'}}>
                            No results found
                        </span>
                    </span>
                }
            />
        </Grid>
    }

    return (
        <Fragment>
            {map(listings, (value) => {
                return (
                    <Box key={value.listingNumber} mb={2} mt={2}>
                        <Card className={classes.listingCard}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.listingMedia}
                                    image={get(sample(value.images), 'c6_uri')}
                                    title={get(sample(value.images), 'altText')}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {get(value, 'propertyMetadata.headline')}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant="caption">
                                            <FormattedMessage id="listings.propertyType" />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value.propertyType}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="caption">
                                            <FormattedMessage id="listings.numberOfBedrooms" />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value.bedrooms}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="caption">
                                            <FormattedMessage id="listings.numberOfBathrooms" />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {parseInt(get(value, 'bathrooms.full'), 0) + (parseInt(get(value, 'bathrooms.half'), 0) * 0.5)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="caption">
                                            <FormattedMessage id="listings.guests" />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value.sleeps}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption">
                                            <FormattedMessage id="listings.averageNightlyPrice" />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value.averagePrice !== null ? `${get(value, 'averagePrice.currencyUnits')} ${get(value, 'averagePrice.value')}` : 0}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => window.open(`https://www.vrbo.com​${value.detailPageUrl}`)}>
                                    <FormattedMessage id="listings.details" />
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                )
            })
        }
        {listings.length > 0 && <Pagination 
            totalRecords={totalRecords} 
            pageIndex={pageIndex} 
            pageLimit={PAGE_LIMIT}
            onPageChange={onPageChange}
        />}
        </Fragment>
    );
};

HotelListings.propTypes = {
    listings: PropTypes.array,
    pageIndex: PropTypes.number,
    totalRecords: PropTypes.number,
    onPageChange: PropTypes.func,
    noResultFound: PropTypes.bool
};

export default memo(HotelListings);