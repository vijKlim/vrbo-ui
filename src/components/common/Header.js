import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import isEmpty from 'lodash/isEmpty';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { onLanguageChange } from './../../actions/app.actions';

/**
 * Styles for Header Component
 */
const useStyles = makeStyles(theme =>({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    appBarTitle: {
        display: 'flex',
        'align-items': 'center'
    },
    menu: {
        width: '100%'
    }
}));

/**
 * 
 * @param {*} props 
 * Header component which has App title and language change dropdown
 */
const Header = (props) => {
    const classes = useStyles();
    const { language, actions: { onLanguageChange }, handleDrawerToggle, pageTitle } = props;

    const handleLanguageChange = (e) => {
        onLanguageChange(e.target.value);
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Grid container>
                    <Grid item xs={7} className={classes.appBarTitle}>
                        <Typography variant="h6">
                        {isEmpty(pageTitle) ? <FormattedMessage id="appBar.pageTitle" /> :
                            pageTitle
                        }
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                        id="language-id"
                        select
                        value={language}
                        onChange={handleLanguageChange}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        <option key={'en'} value={'en'}>
                            English
                        </option>
                        <option key={'de'} value={'de'}>
                            German
                        </option>
                    </TextField>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => {
    return {
        pageTitle: state.hotelListing.pageTitle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onLanguageChange: (language) => dispatch(onLanguageChange(language))
        }
    }
};

Header.propTypes = {
    language: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        onLanguageChange: PropTypes.func
    }),
    handleDrawerToggle: PropTypes.func,
    pageTitle: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));